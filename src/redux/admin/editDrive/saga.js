import { call, put, takeLatest } from 'redux-saga/effects';

import {
  editDriveFailureAction,
  editDriveSuccessAction,
} from 'redux/admin/editDrive/action';

import { editDrivePutApi, driveGetApi } from 'redux/admin/editDrive/api';
import { EDIT_DRIVE } from 'redux/admin/editDrive/actionConstants';

export function* editDriveSaga(action) {
  const { putData, problemId, driveID } = action.payload;
  try {
    console.log('in edit saga', action.payload);
    const response = yield call(driveGetApi, problemId);
    yield put(editDriveSuccessAction(response.data));
    const response2 = yield call(editDrivePutApi, putData, problemId);

    yield put(editDriveSuccessAction(response2.data));
  } catch (error) {
    yield put(editDriveFailureAction(error.message));
  }
}

export default function* editDriveWatcherSaga() {
  yield takeLatest(EDIT_DRIVE.EDIT_DRIVE_REQUEST_ACTION, editDriveSaga);
}
