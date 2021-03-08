import { all } from 'redux-saga/effects';

import headerSaga from 'sagas/timerSaga';
import userSaga from 'sagas/rulesSaga';
import driveSagas from 'sagas/userDriveSagas';

export default function* rootSaga() {
  yield all([headerSaga(), driveSagas(), userSaga()]);
}
