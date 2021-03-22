/* eslint-disable no-console */
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  adminLoginSuccessAction,
  adminLoginFailureAction,
} from 'redux/admin/login/action';
import { adminLoginPostApi } from 'redux/admin/login/api';
import { ADMIN_LOGIN } from 'redux/admin/login/actionConstants';

// worker saga
export function* adminLoginSaga() {
  try {
    const response = yield call(adminLoginPostApi);
    console.log('res', response);
    // yield put(adminLoginSuccessAction(response.data));
  } catch (error) {
    console.log('in saga:', error);
    yield put(adminLoginFailureAction(error.message));
  }
}

// watcherSaga
export default function* adminSaga() {
  yield takeLatest(ADMIN_LOGIN.ADMIN_REQUEST_ACTION, adminLoginSaga);
}
