import { createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";

import ProblemStatementReducer from "reducers/ProblemStatementReducer";
import RulesReducer from "reducers/RulesReducer";
import rootSagas from "sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers({RulesReducer,ProblemStatementReducer}),applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);
