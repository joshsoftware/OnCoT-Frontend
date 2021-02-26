import produce from "immer";

import { DRIVE } from "constants/actionConstants";

export const initialState = {
  id: "",
  name: "",
  startTime: "",
  endTime: "",
  isError: false,
  errorMessage: "",
  isLoading: false,
};

const userDriveReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case DRIVE.SET_DETAILS:
      return { ...state, ...action.payload, isLoading: false };
    case DRIVE.SET_ERROR_MESSAGE:
      const { isError, errorMessage } = action.payload;
      state.isError = isError;
      state.errorMessage = errorMessage;
      state.isLoading = false;
      break;
    case DRIVE.SET_LOADING:
      state.isLoading = action.payload.isLoading;
      break;
    default:
      return state;
  }
});

export default userDriveReducer;
