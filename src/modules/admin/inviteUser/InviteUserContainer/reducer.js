import produce from 'immer';

export const initialState = {
  emails: '',
  users: [],
  successMessage: '',
  emailsError: '',
};

const reducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'EMAILS_SENT_SUCCESS': {
      state.emails = '';
      state.csvEmails = '';
      state.emailsError = '';
      state.csvFileError = '';
      state.successMessage = 'Email Sent Successfully';
      break;
    }
    case 'EMAILS_SENT_FAILURE':
      state.successMessage = 'Something Went Wrong!';
      break;
    case 'INVALID_EMAIL':
      state.emailsError = 'Invalid Email[s]';
      state.successMessage = '';
      break;
    case 'VALID_EMAIL':
      state.emails = payload;
      state.emailsError = '';
      break;
    case 'SET_USERS':
      state.users = payload;
      break;
    default:
      return state;
  }
});

export default reducer;
