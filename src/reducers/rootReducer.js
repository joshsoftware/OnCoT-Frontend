import { combineReducers } from 'redux';

import userDriveReducer from 'reducers/userDriveReducer';
import rulesReducer from 'reducers/rulesReducer';
import candidateFormReducer from 'reducers/candidateFormReducer';
import TimerReducer from 'reducers/timerReducer';
import languageReducer from 'reducers/languageReducer';
import problemStatementReducer from 'reducers/problemStatementReducer';
import DriveTimerReducer from 'reducers/driverTimerReducer';
import codeSubmissionReducer from 'reducers/codeSubmissionReducer';
import finishTestReducer from 'reducers/finishTestReducer';

const rootReducer = combineReducers({
  rulesReducer,
  candidateFormReducer,
  userDriveReducer,
  TimerReducer,
  languageReducer,
  problemStatementReducer,
  DriveTimerReducer,
  codeSubmissionReducer,
  finishTestReducer,
});

export default rootReducer;
