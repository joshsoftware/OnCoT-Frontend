import { useState } from 'react';

import CustomIOComponent from 'components/IDE/CustomIOComponent';
import customIOAPI from 'apis/customIOAPI';

const IDEContainer = () => {
  const [showOutput, setshowOutput] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const toggle = () => setshowOutput(!showOutput);

  const globalState = {
    languageID: 12,
    sourceCode: 'CODE',
    stdIN: inputValue,
  };

  const handleRunClick = () => {
    setLoading(true);
    setOutputValue('');

    if (inputValue) {
      const data = {
        language_id: globalState.languageID,
        source_code: globalState.sourceCode,
        std_id: globalState.stdIN,
      };

      customIOAPI(data)
        .then((response) => {
          setLoading(false);
          setOutputValue(response.data.stdout);
        });
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCut = (event) => {
  };

  const handleCopy = (event) => {
  };

  const handlePaste = (event) => {
  };

  return (
    <CustomIOComponent
      showOutput={showOutput}
      toggle={toggle}
      handleRunClick={handleRunClick}
      handleInputChange={handleInputChange}
      handleCut={handleCut}
      handleCopy={handleCopy}
      handlePaste={handlePaste}
      inputValue={inputValue}
      outputValue={outputValue}
      loading={loading}
    />
  );
};

export default IDEContainer;
