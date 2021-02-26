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
export function* driveDetails(action) {
  try {
    yield put(setDriveLoading(true));
    const { data } = yield call(driveDetail, action.payload.token);
    const { userDetails, driveDetails, authToken } = data;
    yield put(setUserDriveDetails(driveDetails));
    yield put(setUserProfileDetails(userDetails));
    localStorage.setItem("authToken", authToken);
  } catch (err) {
    yield put(showErrorMessage(err.message));
  }
}

//watcher saga
export default function* driveSagas() {
  yield takeLatest(DRIVE.DRIVE_DETAIL_REQUEST, driveDetails);
}
