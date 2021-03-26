import { CODE_SUBMISSION } from 'constants/actionConstants';

export const submitRequest = (data) => ({
  type: CODE_SUBMISSION.CODE_SUBMISSION_REQUEST,
  payload: { ...data },
});

export const submitAction = (payload) => ({
  type: CODE_SUBMISSION.SET_DETAILS,
  payload: { ...payload },
});

export const submitRequestFailed = (requestError) => ({
  type: CODE_SUBMISSION.SET_ERROR_MESSAGE,
  payload: requestError,
});
