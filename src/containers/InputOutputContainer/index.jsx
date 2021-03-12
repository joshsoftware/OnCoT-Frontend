import React, { useState, useReducer, useCallback } from 'react';
import { useSelector } from 'react-redux';

import CustomIOComponent from 'components/IdeComponent/CustomIOComponent';
import { customInputOutputPostApi, customInputOutputSendTokenApi } from 'apis/customIOAPI';
import { reducer } from 'containers/InputOutputContainer/reducer';

const initialState = {
  outputValue: '',
  inputValue: '',
};

const CustomIOContainer = () => {
  const [inputOutuptValue, setInputOutputValue] = useReducer(
    reducer,
    initialState,
  );
  const [loading, setLoading] = useState(false);
  const [showOutput, setshowOutput] = useState(true);

  const globalState = useSelector((state) => state.languageReducer);
  const {
    languageSelected,
    code,
  } = globalState;

  const handleRunClick = async () => {
    setLoading(true);
    setInputOutputValue({ type: 'output', payload: { output: '' } });

    const data = {
      language_id: languageSelected.id,
      language_name: languageSelected.name,
      source_code: code,
      stdin: inputOutuptValue.inputValue,
    };

    customInputOutputPostApi(data)
      .then((response) => {
        let outputValue = '';
        const { token } = response.data;

        // in future we will remove it
        setTimeout(() => {
          customInputOutputSendTokenApi(token)
            .then((output) => {
              if (output.data.stderr) {
                outputValue = output.data.stderr;
              } else {
                outputValue = output.data.stdout;
              }
              setLoading(false);
              setInputOutputValue({
                type: 'output',
                payload: { output: outputValue },
              });
            })
            .catch((error) => {
              // something went wrong! error
              setLoading(false);
            });
        }, 1000);
      })
      .catch((error) => {
        setLoading(false);
        setInputOutputValue({
          type: 'output',
          payload: { output: error.message },
        });
      });
  };

  const handleInputChange = useCallback(
    (event) => {
      setInputOutputValue({
        type: 'input',
        payload: { input: event.target.value },
      });
    },
    [inputOutuptValue.inputValue],
  );

  const toggle = useCallback(() => setshowOutput(!showOutput), [showOutput]);

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
