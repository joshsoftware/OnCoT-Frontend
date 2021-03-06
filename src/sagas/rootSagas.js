import { all } from "redux-saga/effects";

import driveSagas from "sagas/userDriveSagas";
import languageSagas from "sagas/languageSagas";

export default function* rootSaga() {
  yield all([driveSagas(), languageSagas()]);
}
