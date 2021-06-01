import produce from 'immer';

export const initialState = {
  email: '',
  users: [],
  successMessage: '',
  failureMessage: '',
  emailsError: '',
  role: '',
  roleErr: '',
};

const reducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'EMAILS_SENT_SUCCESS': {
      state.email = '';
      state.emailsError = '';
      state.role = '';
      state.roleErr = '';
      state.successMessage = 'Email Sent Successfully';
      state.failureMessage = '';
      break;
    }
    case 'EMAILS_SENT_FAILURE':
      state.successMessage = 'Something Went Wrong!';
      break;
    case 'USER_EXIST_FAILURE':
      state.successMessage = '';
      state.failureMessage = payload;
      break;
    case 'INVALID_EMAIL':
      state.emailsError = 'Invalid Email';
      state.successMessage = '';
      break;
    case 'VALID_EMAIL':
      state.email = payload;
      state.emailsError = '';
      break;
    case 'SET_USERS':
      state.users = payload;
      break;
    case 'SET_ROLE':
      state.role = payload;
      break;
    case 'SET_ROLE_ERROR':
      state.roleErr = payload;
      break;
    default:
      return state;
  }
});

export default reducer;
