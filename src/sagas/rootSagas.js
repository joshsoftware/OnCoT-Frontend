import { all } from 'redux-saga/effects';
import headerSaga from 'sagas/timerSaga';
import driveRulesSaga from 'sagas/rulesSaga';
import formSaga from 'sagas/formSaga';
import driveSagas from 'sagas/userDriveSagas';
import languageSagas from 'sagas/languageSagas';
import statementRequestSaga from 'sagas/problemsSaga';
import driveTimerSaga from 'sagas/driveTimerSaga';
import submitSaga from 'sagas/codeSubmissionSaga';
import adminSaga from 'redux/admin/login/saga';
import createDriveWatcherSaga from 'redux/admin/createDrive/saga';

export default function* rootSagas() {
  yield all([
    formSaga(),
    driveSagas(),
    driveRulesSaga(),
    headerSaga(),
    languageSagas(),
    statementRequestSaga(),
    driveTimerSaga(),
    submitSaga(),
    adminSaga(),
    createDriveWatcherSaga(),
  ]);
}
