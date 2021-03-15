import { CODE_SUBMISSION } from 'constants/actionConstants';

export const submitRequest = (data) => ({
  type: CODE_SUBMISSION.CODE_SUBMISSION_REQUEST,
  payload: { data },
});

export const submitAction = (responsedata) => ({
  type: CODE_SUBMISSION.SET_DETAILS,
  payload: { ...responsedata },
});

export const submitRequestFailed = (requestError) => ({
  type: CODE_SUBMISSION.SET_ERROR_MESSAGE,
  payload: requestError,
});
