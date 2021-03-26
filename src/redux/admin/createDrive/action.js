import { CREATE_DRIVE } from 'redux/admin/createDrive/actionConstants';

// request
export const createDriveRequestAction = (payload) => ({
  type: CREATE_DRIVE.CREATE_DRIVE_REQUEST_ACTION,
  payload,
});

// success
export const createDriveSuccessAction = (payload) => ({
  type: CREATE_DRIVE.CREATE_DRIVE_SUCCESS_ACTION,
  payload,
});

// failure
export const createDriveFailureAction = (payload) => ({
  type: CREATE_DRIVE.CREATE_DRIVE_FAILURE_ACTION,
  payload,
});
