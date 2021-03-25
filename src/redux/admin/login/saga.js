import { call, put, takeLatest } from 'redux-saga/effects';

import {
  adminLoginSuccessAction,
  adminLoginFailureAction,
} from 'redux/admin/login/action';
import { adminLoginPostApi } from 'redux/admin/login/api';
import { ADMIN_LOGIN } from 'redux/admin/login/actionConstants';
import local from 'utils/local';

// worker saga
export function* adminLoginSaga(action) {
  try {
    const response = yield call(adminLoginPostApi, action.payload);
    yield put(adminLoginSuccessAction(response.data.data));
    local.setItem('client', response.headers.client);
    local.setItem('expiry', response.headers.expiry);
    local.setItem('uid', response.headers.uid);
    local.setItem('accessToken', response.headers['access-token']);
  } catch (error) {
    yield put(adminLoginFailureAction(error.message));
  }
}

// watcherSaga
export default function* adminSaga() {
  yield takeLatest(ADMIN_LOGIN.ADMIN_REQUEST_ACTION, adminLoginSaga);
}
