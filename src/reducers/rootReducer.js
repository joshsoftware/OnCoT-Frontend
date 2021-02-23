import { combineReducers } from "redux";

import userDriveReducer from "reducers/userDriveReducer";
import userProfileReducer from "reducers/userProfileReducer";

const rootReducer = combineReducers({
  userDriveReducer,
  userProfileReducer,
});

export default rootReducer;
