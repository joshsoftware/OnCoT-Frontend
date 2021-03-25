import { ADMIN_LOGIN } from 'redux/admin/login/actionConstants';

// request
export const adminLoginRequestAction = (payload) => ({
  type: ADMIN_LOGIN.ADMIN_REQUEST_ACTION,
  payload,
});

// success
export const adminLoginSuccessAction = (payload) => ({
  type: ADMIN_LOGIN.ADMIN_SUCCESS_ACTION,
  payload,
});

// failure
export const adminLoginFailureAction = (payload) => ({
  type: ADMIN_LOGIN.ADMIN_FAILURE_ACTION,
  payload,
});
