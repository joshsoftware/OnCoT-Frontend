import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// import rootReducer from "reducers/rootReducer";
import rootSagas from "sagas/rootSagas";
import { candidateFormReducer } from "reducers/candidateFormReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(candidateFormReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);
