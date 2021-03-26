import { call, put, takeLatest } from 'redux-saga/effects';

import { createDriveFailureAction, createDriveSuccessAction } from 'redux/admin/createDrive/action';

import { createDrivePostApi } from 'redux/admin/createDrive/api';
import { CREATE_DRIVE } from 'redux/admin/createDrive/actionConstants';

export function* createDriveSaga(action) {
  const { postData, problemId } = action.payload;
  try {
    const response = yield call(createDrivePostApi, postData, problemId);
    yield put(createDriveSuccessAction(response.data.data));
  } catch (error) {
    yield put(createDriveFailureAction(error.message));
  }
}

export default function* createDriveWatcherSaga() {
  yield takeLatest(CREATE_DRIVE.CREATE_DRIVE_REQUEST_ACTION, createDriveSaga);
}
