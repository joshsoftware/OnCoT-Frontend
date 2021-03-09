import { combineReducers } from 'redux';

import TimerReducer from 'reducers/timerReducer';
import userDriveReducer from 'reducers/userDriveReducer';
import userProfileReducer from 'reducers/userProfileReducer';
import rulesReducer from 'reducers/rulesReducer';
import candidateFormReducer from 'reducers/candidateFormReducer';

const rootReducer = combineReducers({
  userDriveReducer,
  userProfileReducer,
  TimerReducer,
  rulesReducer,
  candidateFormReducer,
});

export default rootReducer;
