import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import isEmpty from 'utils/isEmpty';

function EditorContainer() {
  const dispatch = useDispatch();
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const { languages, languageSelected, code } = useSelector(
    (state) => state.languageReducer,
  );

  const language_id = languageSelected.id;

  const source_code = code;

  const { isError, errorMessage, responsedata:{
    submissionAllowed, totalTestcases, testcasesPassed, marks,
  } } =
  useSelector(
    (state) => state.codeSubmissionReducer,
  );

  const { statement: { id, submissionCount } } = useSelector(
    (state) => state.problemStatementReducer,
  );

  const submission_count = submissionCount;
  const { candidateId } = useSelector(
    (state) => state.userDriveReducer,
  );
  const candidate_id = candidateId;
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
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = useCallback(() => {
    const obj = {
      source_code,
      language_id,
      id,
      submission_count,
      candidate_id,
    };
    dispatch(submitRequest(obj));
    toggle();
  }, [source_code, language_id, id, submission_count, candidate_id]);

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
