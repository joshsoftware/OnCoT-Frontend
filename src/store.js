import { createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";

// import rootReducer from "reducers/rootReducer";
import RulesReducer from "reducers/RulesReducer";
import rootSagas from "sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(RulesReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);
