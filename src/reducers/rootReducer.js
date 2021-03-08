import { combineReducers } from 'redux';

import TimerReducer from 'reducers/timerReducer';
import userDriveReducer from 'reducers/userDriveReducer';
import userProfileReducer from 'reducers/userProfileReducer';

const rootReducer = combineReducers({
  userDriveReducer,
  userProfileReducer,
  TimerReducer,
});

export default rootReducer;
