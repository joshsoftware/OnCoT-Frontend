import { call, put, takeLatest } from 'redux-saga/effects';

import {
  downloadResultRequestAction,
  downloadResultSuccessAction,
  downloadResultFailureAction,
} from 'redux/admin/downloadResult/action';
import { downloadResultApi } from 'redux/admin/downloadResult/api';
import { DOWNLOAD_RESULT } from 'redux/admin/downloadResult/actionConstants';

// worker saga
export function* downloadResultCsvSaga(action) {
  try {
    const response = yield call(downloadResultApi);
    yield put(downloadResultSuccessAction(response.data));
  } catch (error) {
    yield put(downloadResultFailureAction(error.message));
  }
}

// watcherSaga
export default function* downloadResultSaga() {
  yield takeLatest(
    DOWNLOAD_RESULT.DOWNLOAD_RESULT_REQUEST_ACTION,
    downloadResultCsvSaga,
  );
}
