import { all } from 'redux-saga/effects';

import headerSaga from 'sagas/timerSaga';
import driveSagas from 'sagas/userDriveSagas';
import statementRequestSaga from 'sagas/problemsSaga';

export default function* rootSaga() {
  yield all([headerSaga(), driveSagas(), statementRequestSaga()]);
}
