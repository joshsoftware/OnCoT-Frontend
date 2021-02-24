import getStatement from "apis/problemStatementAPI";
import { PROBLEM_STATEMENT_REDUCER } from "constants/actionConstants";
import { all, call, put, takeLatest } from "redux-saga/effects";
import statementAction from "../actions/problemStatementActions";

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
  yield all([statementRequestSaga()]);
}
