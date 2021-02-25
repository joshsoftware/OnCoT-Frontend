import getRules from "apis/rulesAPI";
import RULES_REDUCER from "constants/actionConstants";
import {call, put, takeLatest } from "redux-saga/effects";
import rulesAction, { rulesRequestFailed } from "../actions/loginActions";

function* rulesSaga(action){
  try{
    const response = yield call(getRules,action.payload);
    yield put(rulesAction(response.data));
  }catch(error){
    yield put(rulesRequestFailed('Something Went Wrong'));
  }
}
//watcherSaga
export default function* userSaga() {
  yield takeLatest(RULES_REDUCER.RULES_REQUEST, rulesSaga);
}
