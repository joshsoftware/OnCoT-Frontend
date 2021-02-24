import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import ProblemStatementReducer from "reducers/ProblemStatementReducer";
import rootSagas from "sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(ProblemStatementReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);
