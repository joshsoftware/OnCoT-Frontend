import { EDIT_DRIVE } from 'redux/admin/editDrive/actionConstants';

// request
export const editDriveRequestAction = (payload) => ({
  type: EDIT_DRIVE.EDIT_DRIVE_REQUEST_ACTION,
  payload,
});

// success
export const editDriveSuccessAction = (payload) => ({
  type: EDIT_DRIVE.EDIT_DRIVE_SUCCESS_ACTION,
  payload,
});

// failure
export const editDriveFailureAction = (payload) => ({
  type: EDIT_DRIVE.EDIT_DRIVE_FAILURE_ACTION,
  payload,
});
