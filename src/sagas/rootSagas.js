import { all } from "redux-saga/effects";
import userSaga from "sagas/rulesSaga";

export default function* rootSagas() {
  yield all([userSaga()]);
}
