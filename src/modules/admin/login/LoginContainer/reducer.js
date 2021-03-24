const initialUserState = {
  email: '',
  password: '',
  emailError: '',
  passwordError:'',
};

export const reducer = (state = initialUserState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'email':
      return ({ ...state, email: payload });
    case 'password':
      return ({ ...state, password: payload });
    case 'emailError':
      return ({ ...state, emailError: payload });
    case 'passwordError':
      return ({ ...state, passwordError: payload });
    default:
      return state;
  }
};

export default reducer;
