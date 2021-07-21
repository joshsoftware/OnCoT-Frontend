import produce from 'immer';

import { INPUT_OUTPUT } from 'constants/actionConstants';

export const initialState = {
  outputValue: '',
  inputValue: '',
};

const ioReducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case INPUT_OUTPUT.SET_OUTPUT: return { ...initialState, outputValue: payload };
    case INPUT_OUTPUT.SET_INPUT: return { ...initialState, inputValue: payload };
    case INPUT_OUTPUT.CLEAR:
      console.log(initialState, 'initialState++++++++++++++++++++++++++++');
      return { ...initialState };
    default: return state;
  }
});

export default ioReducer;
