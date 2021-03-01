import {call, put, takeLatest } from "redux-saga/effects";

import RULES_REDUCER from "constants/actionConstants";
import rulesAction, { rulesRequestFailed } from "../actions/rulesAction";
import getRules from "apis/rulesAPI";

//worker saga
export function* rulesSaga(){
  try{
    const response = yield call(getRules);
    yield put(rulesAction(response.data));
  }catch(error){
    yield put(rulesRequestFailed('Something Went Wrong'));
  }
}
//watcherSaga
export default function* userSaga() {
  yield takeLatest(RULES_REDUCER.RULES_REQUEST, rulesSaga);
}
