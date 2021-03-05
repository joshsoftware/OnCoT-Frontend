import { all } from 'redux-saga/effects';

import driveRulesSaga from 'sagas/rulesSaga';
import formSaga from 'sagas/formSaga';
import driveSagas from 'sagas/userDriveSagas';

export default function* rootSagas() {
  yield all([formSaga(), driveSagas(), driveRulesSaga()]);
}
