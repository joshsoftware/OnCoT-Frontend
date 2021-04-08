import { DRIVE_RESULT } from 'redux/admin/driveResult/actionConstants';

// request
export const driveResultRequestAction = (payload) => ({
  type: DRIVE_RESULT.DRIVE_RESULT_REQUEST_ACTION,
  payload,
});

// success
export const driveResultSuccessAction = (payload) => ({
  type: DRIVE_RESULT.DRIVE_RESULT_SUCCESS_ACTION,
  payload,
});

// failure
export const driveResultFailureAction = (payload) => ({
  type: DRIVE_RESULT.DRIVE_RESULT_FAILURE_ACTION,
  payload,
});
