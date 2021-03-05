import { combineReducers } from 'redux';

import rulesReducer from 'reducers/rulesReducer';
import candidateFormReducer from 'reducers/candidateFormReducer';

const rootReducer = combineReducers({ rulesReducer, candidateFormReducer });

export default rootReducer;
