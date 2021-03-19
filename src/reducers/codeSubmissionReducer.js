import produce from 'immer';
import { CODE_SUBMISSION } from 'constants/actionConstants';

export const initialState = {
  errorMessage: '',
  isError: false,
  responsedata: {},
};

const codeSubmissionReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CODE_SUBMISSION.SET_DETAILS:
      { const { submissionAllowed, totalTestcases, testcasesPassed } = payload;
        state.responsedata = {
          submissionAllowed,
          totalTestcases,
          testcasesPassed,
        }; }
      break;
    case CODE_SUBMISSION.SET_ERROR_MESSAGE:
      state.errorMessage = payload;
      state.isError = true;
      break;
    default:
      return state;
  }
});

export default codeSubmissionReducer;
