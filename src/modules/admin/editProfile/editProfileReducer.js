import produce from 'immer';

export const editProfileReducer = produce((state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'firstName':
      state.firstName = payload;
      break;
    case 'lastName':
      state.lastName = payload;
      break;
    case 'email':
      state.email = payload;
      break;
    case 'firstNameErrTxt':
      state.firstNameErrTxt = payload;
      break;
    case 'lastNameErrTxt':
      state.lastNameErrTxt = payload;
      break;
    case 'emailErrTxt':
      state.emailErrTxt = payload;
      break;
    case 'resetProfileData':
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.firstNameErrTxt = '';
      state.lastNameErrTxt = '';
      state.emailErrTxt = '';
      break;
    case 'setProfileData':
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.firstNameErrTxt = '';
      state.lastNameErrTxt = '';
      state.emailErrTxt = '';
      break;
    default: return state;
  }
});
