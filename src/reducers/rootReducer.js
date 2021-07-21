import { combineReducers } from 'redux';

import userDriveReducer from 'reducers/userDriveReducer';
import rulesReducer from 'reducers/rulesReducer';
import candidateFormReducer from 'reducers/candidateFormReducer';
import TimerReducer from 'reducers/timerReducer';
import languageReducer from 'reducers/languageReducer';
import problemStatementReducer from 'reducers/problemStatementReducer';
import DriveTimerReducer from 'reducers/driverTimerReducer';
import codeSubmissionReducer from 'reducers/codeSubmissionReducer';
import codeBackupReducer from 'reducers/codeBackupReducer';
import ioReducer from 'reducers/ioReducer';
import adminLoginReducer from 'redux/admin/login/reducer';
import adminHomeComponentReducer from 'modules/admin/home/HomeContainer/adminHomeComponentReducer';
import createDriveReducer from 'redux/admin/createDrive/reducer';
import editDriveReducer from 'redux/admin/editDrive/reducer';
import finishTestReducer from 'reducers/finishTestReducer';
import createProblemReducer from 'redux/admin/createProblem/reducer';
import editProblemReducer from 'redux/admin/editProblem/reducer';
import testReducer from 'redux/admin/testCase/reducer';
import driveResultReducer from 'redux/admin/driveResult/reducer';
import downloadResultReducer from 'redux/admin/downloadResult/reducer';

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
  editDriveReducer,
  finishTestReducer,
  createProblemReducer,
  editProblemReducer,
  testReducer,
  driveResultReducer,
  downloadResultReducer,
  codeBackupReducer,
  ioReducer,
});

export default rootReducer;
