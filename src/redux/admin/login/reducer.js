import produce from 'immer';

import { ADMIN_LOGIN } from 'redux/admin/login/actionConstants';
import local from 'utils/local';

export const initialState = {
  emailId: null,
  firstName: null,
  lastName: null,
  errorMessage: null,
  isError: false,
  isAuth: false,
  authToken: local.getItem('accessToken') || '',
};

const adminLoginReducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_LOGIN.ADMIN_SUCCESS_ACTION:
      state.emailId = payload.email;
      state.firstName = payload.first_name;
      state.lastName = payload.last_name;
      state.isAuth = true;
      break;
    case ADMIN_LOGIN.ADMIN_FAILURE_ACTION:
      state.isAuth = false;
      state.isError = true;
      state.errorMessage = payload;
      break;
    default:
      return state;
  }
});

export default adminLoginReducer;
