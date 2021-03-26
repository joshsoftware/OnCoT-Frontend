import produce from 'immer';

import { CREATE_DRIVE } from 'redux/admin/createDrive/actionConstants';
import local from 'utils/local';

export const initialState =
    {
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
          problems:'',
        },
      },
      message: '',

    };

const createDriveReducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_DRIVE.CREATE_DRIVE_SUCCESS_ACTION:
      state.data = payload.data;
      state.message = payload.message;
      break;
    case CREATE_DRIVE.CREATE_DRIVE_FAILURE_ACTION:
      state.data = payload.data;
      state.message = payload.message;
      break;
    case CREATE_DRIVE.CREATE_DRIVE_REQUEST_ACTION:
      break;
    default:
      return state;
  }
});

export default createDriveReducer;
