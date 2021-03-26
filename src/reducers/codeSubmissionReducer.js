import produce from 'immer';
import { CODE_SUBMISSION } from 'constants/actionConstants';
import local from 'utils/local';

export const initialState = {
  errorMessage: '',
  isError: false,
  submissionAllowed:  parseInt(local.getItem('subCount') || null, 10),
  totalTestcases: null,
  testcasesPassed: null,
  marks: null,
  isLoading: false,
};

const codeSubmissionReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CODE_SUBMISSION.SET_DETAILS:
      {
        const { submission_count, total_testcases, passed_testcases, marks } = payload;
        state.submissionAllowed = submission_count;
        state.totalTestcases = total_testcases;
        state.testcasesPassed = passed_testcases;
        state.marks = marks;
        state.isLoading = false;
      }
      break;
    case CODE_SUBMISSION.SET_ERROR_MESSAGE:
      state.errorMessage = payload;
      state.isError = true;
      state.isLoading = false;
      break;
    case CODE_SUBMISSION.CODE_SUBMISSION_REQUEST:
      state.isLoading = true;
      break;
    default:
      return state;
  }
});

export default codeSubmissionReducer;
