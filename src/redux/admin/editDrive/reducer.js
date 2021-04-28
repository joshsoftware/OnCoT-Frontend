import produce from 'immer';

import { EDIT_DRIVE } from 'redux/admin/editDrive/actionConstants';

export const initialState = {
  data: {
    drive: {
      id: '',
      name: '',
      description: '',
      start_time: '',
      end_time: '',
      created_by_id: '',
      updated_by_id: '',
      organization_id: '',
      problems: '',
    },
  },
  message: '',
};

const editDriveReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case EDIT_DRIVE.EDIT_DRIVE_SUCCESS_ACTION:
      state.data = payload.data;
      state.message = payload.message;
      break;
    case EDIT_DRIVE.EDIT_DRIVE_FAILURE_ACTION:
      state.data = payload.data;
      state.message = payload.message;
      break;
    case EDIT_DRIVE.EDIT_DRIVE_REQUEST_ACTION:
      break;
    default:
      return state;
  }
});

export default editDriveReducer;
