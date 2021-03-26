import produce from 'immer';

import { DRIVE } from 'constants/actionConstants';
import local from 'utils/local';

export const initialState = {
  data: {
    id: local.getItem('driveID') || '',
    name: local.getItem('name') || '',
    startTime: '',
    endTime: '',
  },
  candidateId: local.getItem('candidateId') || null,
  isError: false,
  errorMessage: '',
  isLoading: false,
};

const userDriveReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case DRIVE.SET_DETAILS:
      state.data = payload.data;
      state.candidateId = payload.candidateId;
      state.isLoading = false;
      break;
    case DRIVE.SET_ERROR_MESSAGE:
      state.isError = payload.isError;
      state.errorMessage = payload.errorMessage;
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
