import { combineReducers } from 'redux';

import TimerReducer from 'reducers/timerReducer';
import userDriveReducer from 'reducers/userDriveReducer';
import userProfileReducer from 'reducers/userProfileReducer';
import problemStatementReducer from 'reducers/problemStatementReducer';

const rootReducer = combineReducers({
  userDriveReducer,
  userProfileReducer,
  TimerReducer,
  problemStatementReducer,
});

export default rootReducer;
