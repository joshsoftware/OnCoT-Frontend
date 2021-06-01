import produce from 'immer';

export const reducer = produce((state, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'firstName':
      return ({
        ...state,
        firstName: payload,
        firstNameError: '',
      });
    case 'lastName':
      return ({
        ...state,
        lastName: payload,
        lastNameError: '',
      });
    case 'mobileNumber':
      return ({
        ...state,
        mobileNumber: payload,
        mobileNumberError: '',
      });
    case 'password':
      return ({
        ...state,
        password: payload,
        passwordError: '',
      });
    case 'passwordConfirmation':
      return ({
        ...state,
        passwordConfirmation: payload,
        passwordConfirmationError: '',
      });
    case 'firstNameError':
      return ({ ...state, firstNameError: payload });
    case 'lastNameError':
      return ({ ...state, lastNameError: payload });
    case 'mobileNumberError':
      return ({ ...state, mobileNumberError: payload });
    // case 'emailError':
    //   return ({ ...state, emailError: payload });
    case 'passwordConfirmationError':
      return ({ ...state, passwordConfirmationError: payload });
    case 'passwordError':
      return ({ ...state, passwordError: payload });
    case 'resetSignUp':
      return ({
        ...state,
        firstName: '',
        firstNameError: '',
        lastName: '',
        lastNameError: '',
        mobileNumber: '',
        mobileNumberError: '',
        // email: '',
        // emailError: '',
        password: '',
        passwordError: '',
        passwordConfirmation: '',
        passwordConfirmationError: '',
      });
    default:
      return state;
  }
});
