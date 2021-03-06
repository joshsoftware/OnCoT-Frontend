import { call, takeLatest, put } from 'redux-saga/effects';

import { DRIVE } from 'constants/actionConstants';
import driveDetail from 'apis/userDriveApis';
import {
  setUserDriveDetails,
  showErrorMessage,
} from 'actions/userDriveActions';
import local from 'utils/local';

// worker saga
export function* driveDetails(action) {
  try {
    const { data } = yield call(driveDetail, action.payload.token);
    const { driveDetails: userDriveDetails, authToken } = data;
    yield put(setUserDriveDetails(userDriveDetails));
    local.setItem('authToken', authToken);
  } catch (err) {
    yield put(showErrorMessage(err.message));
  }
}

// watcher saga
export default function* driveSagas() {
  yield takeLatest(DRIVE.DRIVE_DETAIL_REQUEST, driveDetails);
}
