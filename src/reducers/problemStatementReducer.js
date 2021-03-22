import produce from 'immer';

import { PROBLEM_STATEMENT } from 'constants/actionConstants';

export const initialState = {
  statement: {
    id:'',
    title:'',
    description:'',
    submissionCount: null,
  },
  errorMessage: '',
  isError: false,
  isLoading: false,
};

const problemStatementReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case PROBLEM_STATEMENT.SET_DETAILS:
      state.statement = {
        id: payload.id,
        title: payload.title,
        description: payload.description,
        submissionCount:payload.submission_count,
      };
      state.isLoading = false;
      break;
    case PROBLEM_STATEMENT.UPDATE_SUBMISSION_COUNT:
      state.statement = {
        submissionCount:payload,
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
    default:
      return state;
  }
});

export default problemStatementReducer;
