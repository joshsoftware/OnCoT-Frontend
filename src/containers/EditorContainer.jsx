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
import isEmpty from 'utils/isEmpty';

function EditorContainer() {
  const dispatch = useDispatch();

  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const { languages, languageSelected, code } = useSelector(
    (state) => state.languageReducer,
  );

  useEffect(() => {
    dispatch(fetchLanguages());
  }, [dispatch]);

  const handleToggle = () => setDropDownOpen(!isDropDownOpen);

  const handleCode = (value) => {
    dispatch(setCode(value));
  };

  const handleClick = (e) => {
    const langObj = {
      id: e.currentTarget.getAttribute('id'),
      name: e.currentTarget.textContent,
    };

    dispatch(setLanguageSelected(langObj));
  };

  let lang = isEmpty(languageSelected)
    ? ''
    : languageSelected.name.split(' ')[0].toLowerCase();

  if (lang === 'c++') lang = 'cpp';

  const options = {
    selectOnLineNumbers: true,
    wordWrap: 'on',
    fontSize: 20,
    minimap: {
      enabled: false,
    },
  };

  const editorDidMount = (editor, monaco) => {
    editor.focus();
  };

  const handleSubmit = () => {
    const obj = { code, language: languageSelected };
    console.log(obj);
  };

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
