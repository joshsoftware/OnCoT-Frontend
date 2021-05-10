import produce from 'immer';

import { EDIT_PROBLEM } from 'redux/admin/editProblem/actionConstants';

export const initialState = {
  data: {
    title: '',
    description: '',
    submissionCount: null,
    timeInMinutes: '',
  },
  message: '',
  problem_id: '',
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const editProblemReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case EDIT_PROBLEM.EDIT_PROBLEM_SUCCESS_ACTION:
      state.message = payload.message;
      state.data = payload.data;
      state.problem_id = payload.pid;
      state.isLoading = false;
      state.isSuccess = true;
      break;
    case EDIT_PROBLEM.EDIT_PROBLEM_FAILURE_ACTION:
      state.data = payload.data;
      state.message = payload.message;
      state.isError = true;
      state.errorMessage = payload;
      state.isLoading = false;
      break;
    case EDIT_PROBLEM.EDIT_PROBLEM_REQUEST_ACTION:
      state.isLoading = true;
      break;
    default:
      return state;
  }
});

export default editProblemReducer;
