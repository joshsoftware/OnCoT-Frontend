import { call, put, takeLatest } from 'redux-saga/effects';

import {
  editDriveFailureAction,
  editDriveSuccessAction,
  editDriveRequestAction,
} from 'redux/admin/editDrive/action';

import { editDrivePutApi } from 'redux/admin/editDrive/api';
import { EDIT_DRIVE } from 'redux/admin/editDrive/actionConstants';

export function* editDriveSaga(action) {
  const { putData, problemId } = action.payload;
  try {
    const response = yield call(editDrivePutApi, putData, problemId);
    yield put(editDriveSuccessAction(response.data));
  } catch (error) {
    yield put(editDriveFailureAction(error.message));
  }
}

export default function* editDriveWatcherSaga() {
  yield takeLatest(EDIT_DRIVE.EDIT_DRIVE_REQUEST_ACTION, editDriveSaga);
}
