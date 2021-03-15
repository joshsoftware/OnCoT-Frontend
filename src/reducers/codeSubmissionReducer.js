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
      state.responsedata = {
        submissionAllowed: payload.submissionAllowed,
        totalTestcases: payload.totalTestcases,
        testcasesPassed:payload.testcasesPassed,
      };
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
