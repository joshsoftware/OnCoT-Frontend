import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import EditorNavComponent from 'components/EditorNavComponent';
import EditorPadComponent from 'components/EditorPadComponent';
import { Container } from 'core-components';

import {
  fetchLanguages,
  setLanguageSelected,
  setCode,
} from 'actions/languageAction';
import { submitRequest } from 'actions/codeSubmissionActions';
import { saveCode, backupCodeRequest } from 'actions/codeBackupAction';
import {
  options,
  keyValueC,
  keyValueV,
} from 'components/EditorPadComponent/editorConstants';
import { ROUTES, CANDIDATE_ROUTES } from 'constants/routeConstants';
import { resetToken } from 'actions/candidateFormActions';

import isEmpty from 'utils/isEmpty';
import local from 'utils/local';
import { currentLangState } from 'utils/helpers/currentLanguageHelper';
import { getLCP } from 'web-vitals';

function EditorContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const codes = {};

  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [intervalActivation, setIntervalActivation] = useState(true);

  const { languages } = useSelector(
    (state) => state.languageReducer,
  );

  let { code, languageSelected } = useSelector((state) => state.languageReducer);

  const {
    isError,
    errorMessage,
    submissionAllowed,
    totalTestcases,
    testcasesPassed,
    isLoading,
  } = useSelector((state) => state.codeSubmissionReducer);

  const {
    statement,
    activeIndex,
  } = useSelector((state) => state.problemStatementReducer);

  const {
    backupCode: {
      answer,
      problem_id: backupCodeProblemId,
      lang_code: backupLanguageId,
      submission_count_left: leftSubmissionCount,
    },
    errorMessage: backupCodeErrMsg,
    isError: backupCodeErr,
  } = useSelector((state) => state.codeBackupReducer);

  const { id: problemId } = statement[activeIndex - 1] || { problem_id : null };
  if (problemId) {
    const { currCode, currLanguageSelected, currSubmissionAllowed }
      = currentLangState(
        code,
        answer,
        problemId,
        languages,
        backupLanguageId,
        languageSelected,
        backupCodeProblemId,
        submissionAllowed,
        leftSubmissionCount,
      );

    code = currCode;
    if (languageSelected.id !== currLanguageSelected.id) {
      dispatch(setLanguageSelected(currLanguageSelected));
    }
    languageSelected = currLanguageSelected;
    codes[problemId] = {
      code: currCode,
      languageSelected: currLanguageSelected,
    };
  }

  const { candidateId } = useSelector((state) => state.userDriveReducer);

  const driveID = local.getItem('driveID');

  const languageId = languageSelected.id;

  useEffect(() => {
    dispatch(fetchLanguages());
  }, [dispatch]);

  const handleToggle = useCallback(() => setDropDownOpen(!isDropDownOpen), [
    isDropDownOpen,
  ]);

  const handleCode = useCallback(
    (value) => {
      dispatch(setCode(value));
    },
    [dispatch],
  );

  const codeBackupInterval = () => {
    if (
      code != null &&
      languageId != null &&
      problemId != null &&
      candidateId != null &&
      driveID != null
    ) {
      const obj = {
        code,
        languageId,
        problemId,
        candidateId,
        driveID,
      };
      dispatch(saveCode(obj));
    }
  };

  const intervalActionSetter = () => {
    setIntervalActivation(!intervalActivation);
  };

  useEffect(() => {
    codeBackupInterval();
    const intervalId = setTimeout(intervalActionSetter, 120000);
    return () => clearTimeout(intervalId);
  }, [intervalActivation]);

  useEffect(() => {
    dispatch(backupCodeRequest(problemId));
  }, [problemId]);

  const [limit, setlimit] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [finishModal, setFinishModal] = useState(false);
  const toggleFinish = () => setFinishModal(!finishModal);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const toggleConfirmation = () => setConfirmationModal(!confirmationModal);

  const handleClick = useCallback(
    (e) => {
      const langObj = {
        id: e.currentTarget.getAttribute('id'),
        name: e.currentTarget.textContent,
        code: e.currentTarget.getAttribute('code'),
      };
      dispatch(setLanguageSelected(langObj));
      dispatch(setCode(langObj.code));
    },
    [dispatch],
  );

  let lang = useMemo(() => {
    if (isEmpty(languageSelected)) {
      return '';
    }
    return languageSelected.name.split(' ')[0].toLowerCase();
  });

  if (lang === 'c++') {
    lang = 'cpp';
  }

  const editorDidMount = useCallback((editor) => {
    editor.onKeyDown((event) => {
      const { keyCode, ctrlKey, metaKey } = event;
      // Enable copy paste for first live drive
      if ((metaKey || ctrlKey) && (keyCode === 52)) {
        event.preventDefault();
      }
    });
    editor.focus();
  }, []);

  const handleSubmit = useCallback(() => {
    if (submissionAllowed > 0) {
      if (code != null) {
        const obj = {
          code,
          languageId,
          problemId,
          submissionAllowed,
          candidateId,
          driveID,
        };
        setModal(true);
        dispatch(submitRequest(obj));
      } else {
        // TODO handle error
      }
    } else {
      setlimit(!limit);
    }
  }, [code, languageId, problemId, submissionAllowed, candidateId]);

  const handleSaveDraft = useCallback(() => {
    if (
      code != null &&
      languageId != null &&
      problemId != null &&
      candidateId != null &&
      driveID != null
    ) {
      const obj = {
        code,
        languageId,
        problemId,
        candidateId,
        driveID,
      };
      dispatch(saveCode(obj));
    }
  }, [code, languageId, problemId, candidateId, driveID]);

  const handleFinish = useCallback(() => {
    localStorage.removeItem('authToken');
    dispatch(resetToken());
    history.replace(ROUTES.CANDIDATE + CANDIDATE_ROUTES.ENDPAGE);
  });

  const handleConfirmation = useCallback(() => {
    toggleConfirmation();
    handleSubmit();
  });

  if (submissionAllowed <= 0 && limit === false) {
    setlimit(true);
  } else if (submissionAllowed > 0 && limit === true) {
    setlimit(false);
  }

  if (backupCodeErr && backupCodeErrMsg) {
    toast.error(backupCodeErrMsg);
  }

  return (
    <Container fluid>
      <EditorNavComponent
        isDropDownOpen={isDropDownOpen}
        handleToggle={handleToggle}
        languageSelected={languageSelected}
        languages={languages}
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        toggle={toggle}
        handleSaveDraft={handleSaveDraft}
        modal={modal}
        errorMessage={errorMessage}
        isError={isError}
        submissionAllowed={submissionAllowed}
        totalTestcases={totalTestcases}
        testcasesPassed={testcasesPassed}
        handleFinish={handleFinish}
        toggleFinish={toggleFinish}
        finishModal={finishModal}
        confirmationModal={confirmationModal}
        isLoading={isLoading}
        limit={limit}
        handleConfirmation={handleConfirmation}
        toggleConfirmation={toggleConfirmation}
      />
      <EditorPadComponent
        id='editor'
        lang={lang}
        code={code}
        handleCode={handleCode}
        options={options}
        editorDidMount={editorDidMount}
      />
    </Container>
  );
}

export default React.memo(EditorContainer);
