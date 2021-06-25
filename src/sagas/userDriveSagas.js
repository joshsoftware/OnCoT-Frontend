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
    const { candidate_id, drive_start_time, drive_end_time } = response.data.data;
    const { id, name, start_time, end_time } = response.data.data.drive;
    const userDriveDetails = {
      data: {
        id,
        name,
        startTime: drive_start_time,
        endTime: drive_end_time,
      },
      candidateId: candidate_id,
    };
    yield put(setUserDriveDetails(userDriveDetails));
    local.setItem('authToken', action.payload.token);
    local.setItem('driveID', id);
    local.setItem('name', name);
    local.setItem('candidateId', candidate_id);
  } catch (err) {
    yield put(showErrorMessage(err.message));
  }
}

// watcher saga
export default function* driveSagas() {
  yield takeLatest(DRIVE.DRIVE_DETAIL_REQUEST, driveDetails);
}
