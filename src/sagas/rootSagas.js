import getStatement from "apis/problemStatementAPI";
import getRules from "apis/rulesAPI";
import RULES_REDUCER, { PROBLEM_STATEMENT_REDUCER } from "constants/actionConstants";
import { all, call, put, takeLatest } from "redux-saga/effects";
import rulesAction from "../actions/rulesActions";
import statementAction from "../actions/problemStatementActions";

//rules saga
function* rulesSaga(action){
  try{
    console.log(action);
    const response = yield call(getRules,action.payload);
    yield put(rulesAction(response.data));
    console.log(response);
  }catch(error){}
}

//watcherSaga
export function* userSaga() {
  yield takeLatest(RULES_REDUCER.RULES_REQUEST, rulesSaga);
}

//Problem statememt Saga
function* statementSaga(action){
  try{
    console.log(action);
    const response = yield call(getStatement,action.payload);
    yield put(statementAction(response.data));
    console.log(response);
  }catch(error){}
}

//watcherSaga
export function* statementRequestSaga() {
  yield takeLatest(PROBLEM_STATEMENT_REDUCER.STATEMENT_REQUEST, statementSaga);
}

export default function* rootSagas() {
  yield all([userSaga(),statementRequestSaga()]);
  // yield all([userSaga()]);
}
