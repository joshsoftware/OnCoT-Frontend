import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditorNavComponent from 'components/EditorNavComponent';
import EditorPadComponent from 'components/EditorPadComponent';
import { Container } from 'core-components';
import {
  fetchLanguages,
  setLanguageSelected,
  setCode,
} from 'actions/languageAction';
import { options } from 'constants/appConstants';
import isEmpty from 'utils/isEmpty';

function EditorContainer() {
  const dispatch = useDispatch();
  const C = 67;
  const V = 86;
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const { languages, languageSelected, code } = useSelector(
    (state) => state.languageReducer,
  );

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

  let lang = isEmpty(languageSelected)
    ? ''
    : languageSelected.name.split(' ')[0].toLowerCase();

  if (lang === 'c++') {
    lang = 'cpp';
  }

  const editorDidMount = useCallback((editor) => {
    editor.onKeyDown((event) => {
      const { which, ctrlKey, metaKey } = event;
      if ((which === C || V) && (metaKey || ctrlKey)) {
        event.preventDefault();
      }
    });
    editor.focus();
  }, []);

  const handleSubmit = useCallback(() => {
    const obj = { code, language: languageSelected };
  }, [code, languageSelected]);

  return (
    <Container fluid>
      <EditorNavComponent
        isDropDownOpen={isDropDownOpen}
        handleToggle={handleToggle}
        languageSelected={languageSelected}
        languages={languages}
        handleClick={handleClick}
        handleSubmit={handleSubmit}
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
