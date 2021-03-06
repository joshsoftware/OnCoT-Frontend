import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditorNavComponent from 'components/EditorNavComponent';
import EditorPadComponent from 'components/EditorPadComponent';
import { fetchLanguages, setLanguageSelected } from 'actions/languageAction';
import isEmpty from 'utils/isEmpty';

function EditorContainer() {
  const dispatch = useDispatch();

  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [code, changeCode] = useState('//write your code here');

  const { languages, languageSelected } = useSelector(
    (state) => state.languageReducer,
  );

  const handleToggle = () => setDropDownOpen(!isDropDownOpen);
  const handleCode = (value) => {
    changeCode(value);
  };

  const handleClick = (e) => {
    const langObj = {
      id: e.currentTarget.getAttribute('id'),
      name: e.currentTarget.textContent,
    };

    dispatch(setLanguageSelected(langObj));
  };

  useEffect(() => {
    dispatch(fetchLanguages());
  }, [dispatch]);

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
    <div>
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
    </div>
  );
}

export default React.memo(EditorContainer);
