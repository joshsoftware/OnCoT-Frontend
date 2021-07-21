import React, { useState, useReducer, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCableConsumer } from 'react-actioncable-provider';

import CustomIOComponent from 'components/IdeComponent/CustomIOComponent';
import { customInputOutputPostApi, customInputOutputSendTokenApi } from 'apis/customIOAPI';
import { currentLangState } from 'utils/helpers/currentLanguageHelper';
import { setInput, setOutput } from 'actions/ioAction';

const initialState = {
  outputValue: '',
  inputValue: '',
};

const CustomIOContainer = () => {
  const dispatch = useDispatch();

  const { authToken } = useSelector((state) => state.candidateFormReducer);
  const broadcastingRoom = `room_${authToken}`;
  const {
    inputValue: storedInput,
    outputValue: storedOutput,
  } = useSelector((state) => state.ioReducer);

  const inputOutuptValue = {
    inputValue: storedInput,
    outputValue: storedOutput,
  };

  const codes = {}; // codes will set code according to question name
  const [latestToken, setLatestToken] = useState('test_token');

  const [loading, setLoading] = useState(false);
  const [showOutput, setshowOutput] = useState(true);

  const globalState = useSelector((state) => state.languageReducer);

  const { languages } = useSelector(
    (state) => state.languageReducer,
  );

  let { code, languageSelected } = useSelector((state) => state.languageReducer);

  const {
    statement,
    activeIndex,
  } = useSelector((state) => state.problemStatementReducer);

  const {
    backupCode: {
      answer,
      problem_id: backupCodeProblemId,
      lang_code: backupLanguageId },
  } = useSelector((state) => state.codeBackupReducer);

  const {
    id: problemId,
    test_case: testCase,
  } = statement[activeIndex - 1] || { problem_id : null };

  if (problemId) {
    const { currCode, currLanguageSelected } = currentLangState(
      code,
      answer,
      problemId,
      languages,
      backupLanguageId,
      languageSelected,
      backupCodeProblemId,
    );
    code = currCode;
    languageSelected = currLanguageSelected;
    codes[problemId] = {
      code: currCode,
      languageSelected: currLanguageSelected,
    };
  }

  const handleRunClick = async () => {
    setLoading(true);
    dispatch(setOutput(''));

    const data = {
      language_id: codes[problemId]?.languageSelected.id,
      language_name: languageSelected.name,
      source_code: codes[problemId]?.code,
      stdin: inputOutuptValue.inputValue || testCase,
      room: broadcastingRoom,
    };

    const checkStatus = (token) => {
      // in future we will remove it
      let outputValue = '';
      setTimeout(() => {
        customInputOutputSendTokenApi(token)
          .then((output) => {
            if (output.data.data.status.description === 'Processing') {
              checkStatus(token);
            } else {
              if (output.data.data.stderr) {
                outputValue = output.data.data.stderr;
              } else if (!output.data.data.stdout) {
                outputValue = output.data.data.compile_output;
              } else {
                outputValue = output.data.data.stdout;
              }
              setLoading(false);
              dispatch(setOutput(outputValue));
            }
          })
          .catch((error) => {
            // something went wrong! error
            dispatch(setOutput('Compiler error'));
            setLoading(false);
          });
      }, 2000);
    };

    customInputOutputPostApi(data)
      .then((response) => {
        const { token } = response.data.data;
        setLatestToken(token);
        // checkStatus(token);
      })
      .catch((error) => {
        setLoading(false);
        dispatch(setOutput(error.message));
      });
  };

  const handleInputChange = useCallback(
    (event) => {
      dispatch(setInput(event.target.value));
    },
    [inputOutuptValue.inputValue],
  );

  const handleEvent = (event) => {
    event.preventDefault();
  };

  const toggle = useCallback(() => setshowOutput(!showOutput), [showOutput]);

  const handleOnInputClick = () => {
    toggle();
    handleRunClick();
  };

  const handleReceived = (data) => {
    if (data.token === latestToken) {
      let outputValue = '';

      if (data.stderr) {
        outputValue = data.stderr;
      } else if (!data.stdout) {
        outputValue = data.compile_output;
      } else {
        outputValue = data.stdout;
      }

      setLoading(false);
      dispatch(setOutput(outputValue));
    }
  };

  return (
    <>
      <ActionCableConsumer
        channel={{ channel: 'TestChannel', room: broadcastingRoom }}
        onReceived={handleReceived}
      />
      <CustomIOComponent
        toggle={toggle}
        handleRunClick={handleRunClick}
        handleInputChange={handleInputChange}
        handleEvent={handleEvent}
        handleOnInputClick={handleOnInputClick}
        showOutput={showOutput}
        inputValue={inputOutuptValue.inputValue}
        outputValue={inputOutuptValue.outputValue}
        loading={loading}
      />
    </>
  );
};

export default React.memo(CustomIOContainer);
