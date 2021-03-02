import { call, put, takeLatest } from "redux-saga/effects";

import { getStatement } from "apis/problemStatementAPI";
import { PROBLEM_STATEMENT } from "constants/actionConstants";
import { statementAction, statementActionFailed } from "actions/problemStatementActions";

//Problem statememt Saga
export function* statementSaga(){
  try{
    const response = yield call(getStatement);
    yield put(statementAction(response.data));
  }catch(error){
    yield put(statementActionFailed("Something Went Wrong"));
  }
}

//watcherSaga
export default function* statementRequestSaga() {
  yield takeLatest(PROBLEM_STATEMENT.DETAILS_REQUEST, statementSaga);
}
