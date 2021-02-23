import { call, takeLatest, put } from "redux-saga/effects";

import { DRIVE } from "constants/actionConstants";
import driveDetail from "apis/userDriveApis";
import { setUserProfileDetails } from "actions/userProfileActions";
import {
  setUserDriveDetails,
  showErrorMessage,
  setDriveLoading,
} from "actions/userDriveActions";

//worker saga
function* driveDetails(action) {
  yield put(setDriveLoading(true));
  try {
    const { data, status } = yield call(driveDetail, action.value.token);
    const { userDetails, driveDetails, authToken } = data;

    if (status === 200) {
      yield put(setDriveLoading(false));
      yield put(setUserDriveDetails(driveDetails));
      yield put(setUserProfileDetails(userDetails));
      localStorage.setItem("authToken", authToken);
    }
  } catch (err) {
    yield put(setDriveLoading(false));
    yield put(showErrorMessage(err.message));
  }
}

//watcher saga
export default function* driveSagas() {
  yield takeLatest(DRIVE.DRIVE_DETAIL_REQUEST, driveDetails);
}
