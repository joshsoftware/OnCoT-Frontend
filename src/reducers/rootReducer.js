import { combineReducers } from 'redux';

import userDriveReducer from 'reducers/userDriveReducer';
import rulesReducer from 'reducers/rulesReducer';
import candidateFormReducer from 'reducers/candidateFormReducer';
import TimerReducer from 'reducers/timerReducer';
import languageReducer from 'reducers/languageReducer';
import problemStatementReducer from 'reducers/problemStatementReducer';

const rootReducer = combineReducers({
  rulesReducer,
  candidateFormReducer,
  userDriveReducer,
  TimerReducer,
  languageReducer,
  problemStatementReducer,
});

export default rootReducer;
