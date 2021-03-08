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
    const response = yield call(driveDetail, action.payload.token);
    const { id, name, start_time, end_time } = response.data.data;
    const userDriveDetails = {
      id,
      name,
      startTime: start_time,
      endTime: end_time,
    };
    yield put(setUserDriveDetails(userDriveDetails));
    local.setItem('authToken', action.payload.token);
  } catch (err) {
    yield put(showErrorMessage(err.message));
  }
}

// watcher saga
export default function* driveSagas() {
  yield takeLatest(DRIVE.DRIVE_DETAIL_REQUEST, driveDetails);
}
