import getRules from "apis/rulesAPI";
import RULES_REDUCER from "constants/actionConstants";
import { all, call, put, takeLatest } from "redux-saga/effects";
import rulesAction from "../actions/loginActions";

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

export default function* rootSagas() {
  yield all([userSaga()]);
}
