import { ADMIN_LOGIN } from 'redux/admin/login/actionConstants';

// request
export const adminLoginRequestAction = () => ({
  type: ADMIN_LOGIN.ADMIN_REQUEST_ACTION,
});

// success
export const adminLoginSuccessAction = (data) => ({
  type: ADMIN_LOGIN.ADMIN_SUCCESS_ACTION,
  payload: data,
});

// failure
export const adminLoginFailureAction = (error) => ({
  type: ADMIN_LOGIN.ADMIN_FAILURE_ACTION,
  payload: error,
});
