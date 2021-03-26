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
import { options, keyValueC, keyValueV } from 'components/EditorPadComponent/editorConstants';
import { ROUTES, CANDIDATE_ROUTES } from 'constants/routeConstants';

import isEmpty from 'utils/isEmpty';

function EditorContainer() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const { languages, languageSelected, code } = useSelector(
    (state) => state.languageReducer,
  );

  const { isError, errorMessage, submissionAllowed, totalTestcases,
    testcasesPassed, marks, isLoading } = useSelector(
    (state) => state.codeSubmissionReducer,
  );

  const { statement: { id, submissionCount } } = useSelector(
    (state) => state.problemStatementReducer,
  );

  const { candidateId } = useSelector(
    (state) => state.userDriveReducer,
  );

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
  const [modal, setModal] = useState(false);
  const [finishModal, setFinishModal] = useState(false);
  const toggle = () => setModal(!modal);
  const toggleFinish = () => setFinishModal(!finishModal);

  const handleClick = useCallback(
    (e) => {
      const langObj = {
        id: e.currentTarget.getAttribute('id'),
        name: e.currentTarget.textContent,
      };

      dispatch(setLanguageSelected(langObj));
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
      const { which, ctrlKey, metaKey } = event;
      if ((which === keyValueC || keyValueV) && (metaKey || ctrlKey)) {
        event.preventDefault();
      }
    });
    editor.focus();
  }, []);

  const handleSubmit = useCallback(() => {
    const obj = {
      code,
      languageId,
      id,
      submissionCount,
      candidateId,
    };
    dispatch(submitRequest(obj));
    toggle();
  }, [code, languageId, id, submissionCount, candidateId]);

  const handleFinish = useCallback(() => {
    history.push(ROUTES.CANDIDATE + CANDIDATE_ROUTES.ENDPAGE);
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
        marks={marks}
        handleFinish={handleFinish}
        toggleFinish={toggleFinish}
        finishModal={finishModal}
        isLoading={isLoading}
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
