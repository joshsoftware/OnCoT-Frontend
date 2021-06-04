import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import EditorNavComponent from 'components/EditorNavComponent';
import EditorPadComponent from 'components/EditorPadComponent';
import { Container } from 'core-components';

import {
  fetchLanguages,
  setLanguageSelected,
  setCode,
} from 'actions/languageAction';
import { submitRequest } from 'actions/codeSubmissionActions';
import {
  options,
  keyValueC,
  keyValueV,
} from 'components/EditorPadComponent/editorConstants';
import { ROUTES, CANDIDATE_ROUTES } from 'constants/routeConstants';

import isEmpty from 'utils/isEmpty';
import local from 'utils/local';

function EditorContainer() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const { languages, languageSelected, code } = useSelector(
    (state) => state.languageReducer,
  );

  const {
    isError,
    errorMessage,
    submissionAllowed,
    totalTestcases,
    testcasesPassed,
    isLoading,
  } = useSelector((state) => state.codeSubmissionReducer);

  const {
    statement: { id, submissionCount },
  } = useSelector((state) => state.problemStatementReducer);

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
          id,
          submissionAllowed,
          candidateId,
          driveID,
        };
        dispatch(submitRequest(obj));
        toggle();
      } else {
        // TODO handle error
      }
    } else {
      setlimit(!limit);
    }
  }, [code, languageId, id, submissionAllowed, candidateId]);

  const handleFinish = useCallback(() => {
    history.push(ROUTES.CANDIDATE + CANDIDATE_ROUTES.ENDPAGE);
  });

  const handleConfirmation = useCallback(() => {
    toggleConfirmation();
    handleSubmit();
  });

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
