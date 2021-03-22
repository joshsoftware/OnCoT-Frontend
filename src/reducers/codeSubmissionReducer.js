import produce from 'immer';
import { CODE_SUBMISSION } from 'constants/actionConstants';

export const initialState = {
  errorMessage: '',
  isError: false,
  responsedata: {
    submissionAllowed: null,
    totalTestcases: null,
    testcasesPassed: null,
    marks: null,
  },
};

const codeSubmissionReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CODE_SUBMISSION.SET_DETAILS:
      {
        const { submission_count, total_testcases, passed_testcases, marks } = payload;
        state.responsedata = {
          submissionAllowed:submission_count,
          totalTestcases:total_testcases,
          testcasesPassed:passed_testcases,
          marks,
        };
      }
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
