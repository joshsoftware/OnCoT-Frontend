import { DOWNLOAD_RESULT } from 'redux/admin/downloadResult/actionConstants';

// request
export const downloadResultRequestAction = (payload) => ({
  type: DOWNLOAD_RESULT.DOWNLOAD_RESULT_REQUEST_ACTION,
  payload,
});

// success
export const downloadResultSuccessAction = (payload) => ({
  type: DOWNLOAD_RESULT.DOWNLOAD_RESULT_SUCCESS_ACTION,
  payload,
});

// failure
export const downloadResultFailureAction = (payload) => ({
  type: DOWNLOAD_RESULT.DOWNLOAD_RESULT_FAILURE_ACTION,
  payload,
});
