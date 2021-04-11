export const initialState = {
  emails: '',
  csvEmails: '',
  emailsError: '',
  csvFileError: '',
  successMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'EMAILS_SENT_SUCCESS': {
      return {
        ...state,
        emails: '',
        csvEmails: '',
        emailsError: '',
        csvFileError: '',
        successMessage: payload,
      };
    }
    case 'EMAILS_SENT_FAILURE': {
      return { ...state, successMessage: 'Something Went Wrong!' };
    }
    case 'INVALID_EMAIL': {
      return { ...state, emailsError: 'Invalid Email[s]', successMessage: '' };
    }
    case 'INVALID_CSV_FILETYPE': {
      return {
        ...state,
        csvEmails: '',
        csvFileError: 'Invalid Filetype (.csv need)',
        successMessage: '',
      };
    }
    case 'VALID_EMAIL': {
      return { ...state, emails: payload, emailsError: '' };
    }
    case 'VALID_CSV_FILETYPE': {
      return { ...state, csvEmails: payload, csvFileError: '' };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
