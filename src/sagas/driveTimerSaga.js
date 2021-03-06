import { call, put, takeLatest } from 'redux-saga/effects';

import { getDriveTimer } from 'apis/driveTimerApi';
import {
  driveTimerAction,
  driveTimerRequestFailed,
} from 'actions/driveTimerActions';

import { DRIVE_TIMER } from 'constants/actionConstants';

export function* driveTimer(action) {
  try {
    const response = yield call(getDriveTimer, action.payload);
    yield put(driveTimerAction(response.data.data));
  } catch (error) {
    yield put(
      driveTimerRequestFailed('Something went wrong with drive timer!'),
    );
  }
}

export default function* driveTimerSaga() {
  yield takeLatest(DRIVE_TIMER.DRIVE_TIMER_REQUEST, driveTimer);
}
