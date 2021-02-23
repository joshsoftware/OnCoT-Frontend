import { DRIVE } from "constants/actionConstants";

export const driveDetailRequest = (value) => {
  return {
    type: DRIVE.DRIVE_DETAIL_REQUEST,
    value: { token: value },
  };
};

export const setUserDriveDetails = (value) => {
  return {
    type: DRIVE.SET_DETAILS,
    value,
  };
};

export const showErrorMessage = (value) => {
  return {
    type: DRIVE.SET_ERROR_MESSAGE,
    value: { error: true, errorMessage: value },
  };
};

export const setDriveLoading = (value) => {
  return {
    type: DRIVE.SET_LOADING,
    value: { loading: value },
  };
};
