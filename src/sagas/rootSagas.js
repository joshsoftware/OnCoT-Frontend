import { all } from "redux-saga/effects";
import statementRequestSaga from "./problemsSaga";

export default function* rootSagas() {
  yield all([statementRequestSaga()]);
}
