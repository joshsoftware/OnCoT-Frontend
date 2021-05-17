import produce from 'immer';

export const reducer = produce((state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'password':
      state.password = payload;
      break;
    case 'currentPassword':
      state.currentPassword = payload;
      break;
    case 'passwordConfirmation':
      state.passwordConfirmation = payload;
      break;
    case 'passwordErrTxt':
      state.passwordErrTxt = payload;
      break;
    case 'currentPasswordErrTxt':
      state.currentPasswordErrTxt = payload;
      break;
    case 'passwordConfirmationErrTxt':
      state.passwordConfirmationErrTxt = payload;
      break;
    case 'resetPasswordData':
      state.password = '';
      state.currentPassword = '';
      state.passwordConfirmation = '';
      state.passwordConfirmationErrTxt = '';
      state.passwordErrTxt = '';
      state.currentPasswordErrTxt = '';
      break;
    case 'resetErrTxt':
      state.passwordConfirmationErrTxt = '';
      state.passwordErrTxt = '';
      break;
    default: return state;
  }
});
