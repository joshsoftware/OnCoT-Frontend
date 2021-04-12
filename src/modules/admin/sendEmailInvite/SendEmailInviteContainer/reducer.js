import produce from 'immer';

export const initialState = {
  emails: '',
  csvEmails: '',
  emailsError: '',
  csvFileError: '',
  successMessage: '',
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
    case 'INVALID_CSV_FILETYPE':
      state.csvEmails = '';
      state.csvFileError = 'Invalid Filetype (.csv need)';
      state.successMessage = '';
      break;
    case 'VALID_EMAIL':
      state.emails = payload;
      state.emailsError = '';
      break;
    case 'VALID_CSV_FILETYPE':
      state.csvEmails = payload;
      state.csvFileError = '';
      break;
    default:
      return state;
  }
});

export default reducer;
