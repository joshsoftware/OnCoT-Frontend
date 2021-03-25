import produce from 'immer';

import { ADMIN_LOGIN } from 'redux/admin/login/actionConstants';

export const initialState = {
  emailId: null,
  firstName: null,
  lastName: null,
  errorMessage: null,
  isError: false,
};

const adminLoginReducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_LOGIN.ADMIN_SUCCESS_ACTION:
      state.emailId = payload.email;
      state.firstName = payload.first_name;
      state.lastName = payload.last_name;
      break;
    case ADMIN_LOGIN.ADMIN_FAILURE_ACTION:
      state.isError = true;
      state.errorMessage = payload;
      break;
    default:
      return state;
  }
});

export default adminLoginReducer;
