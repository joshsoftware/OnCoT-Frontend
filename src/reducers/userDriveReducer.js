import produce from 'immer';

import { DRIVE } from 'constants/actionConstants';

export const initialState = {
  data: {
    id: '',
    name: '',
    startTime: '',
    endTime: '',
  },
  isError: false,
  errorMessage: '',
  isLoading: false,
};

const userDriveReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case DRIVE.SET_DETAILS:
      return { ...state, ...action.payload, isLoading: false };
    case DRIVE.SET_ERROR_MESSAGE:
      state.isError = action.payload.isError;
      state.errorMessage = action.payload.errorMessage;
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
