import { EDIT_PROBLEM } from 'redux/admin/editProblem/actionConstants';

// request
export const editProblemRequestAction = (payload) => ({
  type: EDIT_PROBLEM.EDIT_PROBLEM_REQUEST_ACTION,
  payload,
});

// success
export const editProblemSuccessAction = (payload) => ({
  type: EDIT_PROBLEM.EDIT_PROBLEM_SUCCESS_ACTION,
  payload,
});

// failure
export const editProblemFailureAction = (payload) => ({
  type: EDIT_PROBLEM.EDIT_PROBLEM_FAILURE_ACTION,
  payload,
});
