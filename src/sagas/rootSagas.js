import { all } from "redux-saga/effects";

import driveSagas from "sagas/userDriveSagas";

export default function* rootSaga() {
  yield all([driveSagas()]);
}
