import { DRIVE } from 'constants/actionConstants';

export const driveDetailRequest = (token) => ({
  type: DRIVE.DRIVE_DETAIL_REQUEST,
  payload: { token },
});

export const setUserDriveDetails = (details) => ({
  type: DRIVE.SET_DETAILS,
  payload:{ ...details },
});

export const showErrorMessage = (errorMessage) => ({
  type: DRIVE.SET_ERROR_MESSAGE,
  payload: { isError: true, errorMessage },
});
