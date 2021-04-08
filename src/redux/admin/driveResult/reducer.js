import produce from 'immer';

import { DRIVE_RESULT } from 'redux/admin/driveResult/actionConstants';

export const initialState = {
  data:[],
  isSuccess:false,
  isLoading:false,
  isError:false,
  errorMessage:'',
};

const driveResultReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case DRIVE_RESULT.DRIVE_RESULT_SUCCESS_ACTION:
      state.data = payload;
      state.isLoading = false;
      state.isSuccess = true;
      break;
    case DRIVE_RESULT.DRIVE_RESULT_FAILURE_ACTION:
      state.isError = true;
      state.errorMessage = payload;
      state.isLoading = false;
      break;
    case DRIVE_RESULT.DRIVE_RESULT_REQUEST_ACTION:
      state.isLoading = true;
      break;
    default:
      return state;
  }
});

export default driveResultReducer;
