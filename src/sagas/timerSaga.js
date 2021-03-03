import { call, put, takeLatest } from 'redux-saga/effects';

import { getTimer } from 'apis/timerApi';
import { timerAction, timerRequestFailed } from 'actions/timerActions';

import { TIMER } from 'constants/actionConstants';

export function* timerSaga() {
  try {
    const { data } = yield call(getTimer);
    yield put(timerAction(data));
  } catch (error) {
    yield put(timerRequestFailed('Something went wrong with timer!'));
  }
}

export default function* headerSaga() {
  yield takeLatest(TIMER.TIMER_REQUEST, timerSaga);
}
