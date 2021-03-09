import { all } from 'redux-saga/effects';

import headerSaga from 'sagas/timerSaga';
import driveSagas from 'sagas/userDriveSagas';
import statementRequestSaga from 'sagas/problemsSaga';
import userSaga from 'sagas/rulesSaga';
import formSaga from 'sagas/candidateFormSaga';

export default function* rootSaga() {
  yield all([headerSaga(), driveSagas(), userSaga(), formSaga(), statementRequestSaga()]);
}
