import { ADMIN_LOGIN } from 'redux/admin/login/actionConstants';

export const initialState = {
  email: '',
  password: '',
  errorMessage: null,
  isError: false,
};

const adminLoginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_LOGIN.ADMIN_SUCCESS_ACTION:
      state.email = payload.email;
      state.password = payload.password;
      break;
    case ADMIN_LOGIN.ADMIN_FAILURE_ACTION:
      state.isError = true;
      state.errorMessage = payload.errorMessage;
      break;
    default:
      return state;
  }
};

export default adminLoginReducer;
