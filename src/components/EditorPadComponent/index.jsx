import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import PropTypes from 'prop-types';

function EditorPadComponent({
  lang,
  code,
  handleCode,
  options,
  editorDidMount,
}) {
  return (
    <MonacoEditor
      className='border border-primary custom-style'
      language={lang}
      height='80vh'
      theme='vs-dark'
      value={code}
      onChange={handleCode}
      options={options}
      editorDidMount={editorDidMount}
    />
  );
}

EditorPadComponent.propTypes = {
  lang: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  handleCode: PropTypes.func.isRequired,
  options: PropTypes.shape().isRequired,
  editorDidMount: PropTypes.func.isRequired,
};

export default React.memo(EditorPadComponent);
