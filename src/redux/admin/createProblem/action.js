import { CREATE_PROBLEM } from 'redux/admin/createProblem/actionConstants';

// request
export const createProblemRequestAction = (payload) => ({
  type: CREATE_PROBLEM.CREATE_PROBLEM_REQUEST_ACTION,
  payload,
});

// success
export const createProblemSuccessAction = (payload) => ({
  type: CREATE_PROBLEM.CREATE_PROBLEM_SUCCESS_ACTION,
  payload,
});

// failure
export const createProblemFailureAction = (payload) => ({
  type: CREATE_PROBLEM.CREATE_PROBLEM_FAILURE_ACTION,
  payload,
});
