import produce from 'immer';

import { PROBLEM_STATEMENT } from 'constants/actionConstants';

export const initialState = {
  statement: [],
  activeIndex: 1,
  errorMessage: '',
  isError: false,
  isLoading: false,
  timeInMinutes: '',
  testCase: '',
};

const problemStatementReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case PROBLEM_STATEMENT.SET_DETAILS:
      state.statement = payload;
      state.isLoading = false;
      break;
    case PROBLEM_STATEMENT.UPDATE_SUBMISSION_COUNT:
      state.statement = {
        submissionCount: payload,
      };
      state.isLoading = false;
      break;
    case PROBLEM_STATEMENT.SET_ERROR_MESSAGE:
      state.errorMessage = payload;
      state.isError = true;
      state.isLoading = false;
      break;
    case PROBLEM_STATEMENT.DETAILS_REQUEST:
      state.isLoading = true;
      break;
    case PROBLEM_STATEMENT.SET_ACTIVE_INDEX:
      state.activeIndex = payload;
      break;
    default:
      return state;
  }
});

export default problemStatementReducer;
