import { call, put, takeLatest } from 'redux-saga/effects';

import {
  editDriveFailureAction,
  editDriveSuccessAction,
  editDriveRequestAction,
} from 'redux/admin/editDrive/action';

import { editDrivePutApi } from 'redux/admin/editDrive/api';
import { EDIT_DRIVE } from 'redux/admin/editDrive/actionConstants';
import { toast } from 'react-toastify';

export function* editDriveSaga(action) {
  const { putData } = action.payload;
  try {
    const response = yield call(editDrivePutApi, putData);
    toast.success('Drive updated successfully');
    yield put(editDriveSuccessAction(response.data));
  } catch (error) {
    yield put(editDriveFailureAction(error.message));
  }
}

export default function* editDriveWatcherSaga() {
  yield takeLatest(EDIT_DRIVE.EDIT_DRIVE_REQUEST_ACTION, editDriveSaga);
}
