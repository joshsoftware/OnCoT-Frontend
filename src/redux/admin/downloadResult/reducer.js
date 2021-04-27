import produce from 'immer';
import { DOWNLOAD_RESULT } from 'redux/admin/downloadResult/actionConstants';

const fileSaver = require('file-saver');

export const initialState = {
  downloadResultMessage: '',
  downloadResultIsLoading: true,
};

const downloadResultReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case DOWNLOAD_RESULT.DOWNLOAD_RESULT_SUCCESS_ACTION:
      state.downloadResultMessage = payload;
      state.downloadResultIsLoading = false;
      fileSaver.saveAs(new Blob([payload], { type: 'application/octet-stream' }), 'drive-result.csv');
      break;
    case DOWNLOAD_RESULT.DOWNLOAD_RESULT_FAILURE_ACTION:
      state.downloadResultMessage = payload;
      state.downloadResultIsLoading = false;
      break;
    case DOWNLOAD_RESULT.DOWNLOAD_RESULT_REQUEST_ACTION:
      state.downloadResultIsLoading = true;
      break;
    default:
      return state;
  }
});

export default downloadResultReducer;
