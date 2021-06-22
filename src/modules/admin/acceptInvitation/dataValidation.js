export const validateData = (schema, data, setSignUpState) => {
  schema.validate(data, { abortEarly: false }).catch((err) => {
    err.inner.forEach((e) => {
      switch (e.path) {
        case 'first_name':
          setSignUpState({
            type: 'firstNameError',
            payload: e.message,
          });
          break;
        case 'last_name':
          setSignUpState({
            type: 'lastNameError',
            payload: e.message,
          });
          break;
        case 'mobile_number':
          setSignUpState({
            type: 'mobileNumberError',
            payload: e.message,
          });
          break;
        case 'password':
          setSignUpState({
            type: 'passwordError',
            payload: e.message,
          });
          break;
        case 'password_confirmation':
          setSignUpState({
            type: 'passwordConfirmationError',
            payload: e.message,
          });
          break;
        default:
          break;
      }
    });
  });
};
