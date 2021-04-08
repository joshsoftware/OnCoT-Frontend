import { combineReducers } from 'redux';

import userDriveReducer from 'reducers/userDriveReducer';
import rulesReducer from 'reducers/rulesReducer';
import candidateFormReducer from 'reducers/candidateFormReducer';
import TimerReducer from 'reducers/timerReducer';
import languageReducer from 'reducers/languageReducer';
import problemStatementReducer from 'reducers/problemStatementReducer';
import DriveTimerReducer from 'reducers/driverTimerReducer';
import codeSubmissionReducer from 'reducers/codeSubmissionReducer';
import adminLoginReducer from 'redux/admin/login/reducer';
import adminHomeComponentReducer from 'modules/admin/home/HomeContainer/adminHomeComponentReducer';
import createDriveReducer from 'redux/admin/createDrive/reducer';
import finishTestReducer from 'reducers/finishTestReducer';
import createProblemReducer from 'redux/admin/createProblem/reducer';
import testReducer from 'redux/admin/testCase/reducer';

const rootReducer = combineReducers({
  rulesReducer,
  candidateFormReducer,
  userDriveReducer,
  TimerReducer,
  languageReducer,
  problemStatementReducer,
  DriveTimerReducer,
  codeSubmissionReducer,
  adminLoginReducer,
  adminHomeComponentReducer,
  createDriveReducer,
  finishTestReducer,
  createProblemReducer,
  testReducer,
});

export default rootReducer;
