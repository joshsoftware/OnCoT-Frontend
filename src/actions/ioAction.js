import { INPUT_OUTPUT } from 'constants/actionConstants';

export const setOutput = (output) => ({
  type: INPUT_OUTPUT.SET_OUTPUT,
  payload: output,
});

export const setInput = (input) => ({
  type: INPUT_OUTPUT.SET_INPUT,
  payload: input,
});

export const clearIO = () => ({
  type: INPUT_OUTPUT.CLEAR,
});
