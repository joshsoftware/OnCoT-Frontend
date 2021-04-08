import produce from 'immer';

import { CREATE_PROBLEM } from 'redux/admin/createProblem/actionConstants';

export const initialState = {
  message:'',
  problem_id:'',
  isSuccess:false,
  isLoading:false,
  isError:false,
  errorMessage:'',
};

const createProblemReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PROBLEM.CREATE_PROBLEM_SUCCESS_ACTION:
      state.message = payload.message;
      state.problem_id = payload.pid;
      state.isLoading = false;
      state.isSuccess = true;
      break;
    case CREATE_PROBLEM.CREATE_PROBLEM_FAILURE_ACTION:
      console.log('in failuer');
      state.isError = true;
      state.errorMessage = payload;
      state.isLoading = false;
      break;
    case CREATE_PROBLEM.CREATE_PROBLEM_REQUEST_ACTION:
      console.log('in loading');
      state.isLoading = true;
      break;
    default:
      return state;
  }
});

export default createProblemReducer;
