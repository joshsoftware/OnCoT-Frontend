import produce from 'immer';

import { DRIVE } from 'constants/actionConstants';
import local from 'utils/local';

export const initialState = {
  data: {
    id: local.getItem('driveId') || '',
    name: '',
    startTime: '',
    endTime: '',
  },
  isError: false,
  errorMessage: '',
  isLoading: false,
};

const userDriveReducer = produce((state = initialState, action = {}) => {
  switch (action.type) {
    case DRIVE.SET_DETAILS:
      state.data = action.payload;
      state.isLoading = false;
      break;
    case DRIVE.SET_ERROR_MESSAGE:
      state.isError = action.payload.isError;
      state.errorMessage = action.payload.errorMessage;
      state.isLoading = false;
      break;
    case DRIVE.DRIVE_DETAIL_REQUEST:
      state.isLoading = true;
      break;
    default:
      return state;
  }
});

export default userDriveReducer;
