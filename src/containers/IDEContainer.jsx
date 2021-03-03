import { useState } from 'react';

import CustomIOComponent from 'components/IDE/CustomIOComponent';
import customIOAPI from 'apis/customIOAPI';

const IDEContainer = () => {
  const [showOutput, setshowOutput] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const toggle = () => setshowOutput(!showOutput);

  const globalState = {
    languageID: 12,
    sourceCode: 'CODE',
    stdIN: inputValue,
  };

  const handleRunClick = () => {
    if (inputValue) {
      const data = {
        language_id: globalState.languageID,
        source_code: globalState.sourceCode,
        std_id: globalState.stdIN,
      };
      const response = customIOAPI(data);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <CustomIOComponent
      showOutput={showOutput}
      toggle={toggle}
      handleRunClick={handleRunClick}
      handleInputChange={handleInputChange}
      inputValue={inputValue}
      outputValue={outputValue}
    />
  );
};

export default IDEContainer;
