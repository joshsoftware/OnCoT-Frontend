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
import problemWatcherSaga from 'redux/admin/createProblem/saga';
import editProblemWatcherSaga from 'redux/admin/editProblem/saga';
import testCaseWatcherSaga from 'redux/admin/testCase/saga';
import driveResultSaga from 'redux/admin/driveResult/saga';
import downloadResultSaga from 'redux/admin/downloadResult/saga';
import finishTestSaga from './finishtestSaga';

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
    finishTestSaga(),
    problemWatcherSaga(),
    editProblemWatcherSaga(),
    testCaseWatcherSaga(),
    driveResultSaga(),
    downloadResultSaga(),
  ]);
}
