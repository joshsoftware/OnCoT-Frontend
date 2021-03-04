import { useState, useReducer } from 'react';
import produce from 'immer';

import CustomIOComponent from 'components/IDE/CustomIOComponent';
import customIOAPI from 'apis/customIOAPI';

const initialState = {
  outputValue: '',
  inputValue: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'output': return produce(state, (draft) => { draft.outputValue = action.payload.output; });
    case 'input': return produce(state, (draft) => { draft.inputValue = action.payload.input; });
    default: return state;
  }
};

const IDEContainer = () => {
  const [inputOutuptValue, setInputOutputValue] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [showOutput, setshowOutput] = useState(true);

  const toggle = () => setshowOutput(!showOutput);

  const globalState = {
    languageID: 12,
    sourceCode: 'CODE',
    stdIN: initialState.inputValue,
  };

  const handleRunClick = () => {
    setLoading(true);
    setInputOutputValue({ type:'output', payload:{ output: '' } });

    const data = {
      language_id: globalState.languageID,
      source_code: globalState.sourceCode,
      std_id: globalState.stdIN,
    };

    customIOAPI(data)
      .then((response) => {
        setLoading(false);
        let outputValue = '';
        if (response.data.strerr) {
          outputValue = response.data.stderr;
        } else {
          outputValue = response.data.stdout;
        }
        setInputOutputValue({ type:'output', payload:{ output: outputValue } });
      });
  };

  const handleInputChange = (event) => {
    setInputOutputValue({ type:'input', payload:{ input: event.target.value } });
  };

  const handleCut = (event) => {
  };

  const handleCopy = (event) => {
  };

  const handlePaste = (event) => {
  };

  return (
    <CustomIOComponent
      toggle={toggle}
      handleRunClick={handleRunClick}
      handleInputChange={handleInputChange}
      handleCut={handleCut}
      handleCopy={handleCopy}
      handlePaste={handlePaste}
      showOutput={showOutput}
      inputValue={inputOutuptValue.inputValue}
      outputValue={inputOutuptValue.outputValue}
      loading={loading}
    />
  );
};

export default IDEContainer;
