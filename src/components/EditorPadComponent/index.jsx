import MonacoEditor from "react-monaco-editor";

function EditorPadComponent({
  lang,
  code,
  handleCode,
  options,
  editorDidMount,
}) {
  return (
    <MonacoEditor
      className="border border-primary"
      language={lang}
      height="90vh"
      theme="vs-dark"
      value={code}
      onChange={handleCode}
      options={options}
      editorDidMount={editorDidMount}
    />
  );
}

export default EditorPadComponent;
