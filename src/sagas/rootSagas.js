import { all } from "redux-saga/effects";
import userSaga from "sagas/timerSaga";

export default function* rootSaga() {
  yield all([userSaga()]);
}
