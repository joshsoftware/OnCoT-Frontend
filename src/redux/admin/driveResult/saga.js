import { call, put, takeLatest } from 'redux-saga/effects';

import {
  driveResultSuccessAction,
  driveResultFailureAction,
} from 'redux/admin/driveResult/action';
import { driveResultPostApi } from 'redux/admin/driveResult/api';
import { DRIVE_RESULT } from 'redux/admin/driveResult/actionConstants';

// worker saga
export function* driveResultSaga(action) {
  try {
    const response = yield call(driveResultPostApi);
    yield put(driveResultSuccessAction(response.data));
  } catch (error) {
    yield put(driveResultFailureAction(error));
  }
}

// watcherSaga
export default function* driveResultWatcherSaga() {
  yield takeLatest(DRIVE_RESULT.DRIVE_RESULT_REQUEST_ACTION, driveResultSaga);
}
