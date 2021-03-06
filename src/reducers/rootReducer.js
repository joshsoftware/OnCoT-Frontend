import { combineReducers } from 'redux';

import userDriveReducer from 'reducers/userDriveReducer';
import userProfileReducer from 'reducers/userProfileReducer';
import languageReducer from 'reducers/languageReducer';

const rootReducer = combineReducers({
  userDriveReducer,
  userProfileReducer,
  languageReducer,
});

export default rootReducer;
