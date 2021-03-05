import React, { useState, useReducer, useCallback } from 'react';

import { useSelector } from 'react-redux';

import CustomIOComponent from 'components/IdeComponent/CustomIOComponent';
import customIOAPI from 'apis/customIOAPI';
import { reducer } from 'containers/IdeContainer/reducer';

const initialState = {
  outputValue: null,
  inputValue: '',
};

const CustomIOContainer = () => {
  const [inputOutuptValue, setInputOutputValue] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [showOutput, setshowOutput] = useState(true);

  const globalState = useSelector((state) => state);

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
      }).catch((error) => {
        setLoading(false);
        setInputOutputValue({ type:'output', payload:{ output: error.message } });
      });
  };

  const handleInputChange = useCallback((event) => {
    setInputOutputValue({ type:'input', payload:{ input: event.target.value } });
  }, [inputOutuptValue.inputValue]);

  const toggle = () => setshowOutput(!showOutput);

  return (
    <CustomIOComponent
      toggle={toggle}
      handleRunClick={handleRunClick}
      handleInputChange={handleInputChange}
      showOutput={showOutput}
      inputValue={inputOutuptValue.inputValue}
      outputValue={inputOutuptValue.outputValue}
      loading={loading}
    />
  );
};

export default React.memo(CustomIOContainer);
