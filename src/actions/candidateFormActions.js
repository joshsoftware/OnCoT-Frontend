import { CANDIDATE_FORM_ACTIONS } from 'constants/actionConstants';

// request
export const candidateFormRequestAction = (data) => ({
  type: CANDIDATE_FORM_ACTIONS.REQUEST_ACTION,
  payload: data,
});

// success
export const candidateFormSuccessAction = (data) => ({
  type: CANDIDATE_FORM_ACTIONS.SUCCESS_ACTION,
  payload: data,
});

// failure
export const candidateFormFailureAction = (error) => ({
  type: CANDIDATE_FORM_ACTIONS.FAILURE_ACTION,
  payload: error,
});
