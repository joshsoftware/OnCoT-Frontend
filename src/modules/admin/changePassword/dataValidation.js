export const validateData = (schema, data, setChangePasswordData) => {
  schema.validate(data, { abortEarly: false }).catch((err) => {
    err.inner.forEach((ele) => {
      if (ele.path === 'password') {
        setChangePasswordData({
          type: 'passwordErrTxt',
          payload: ele.message,
        });
      }
      if (ele.path === 'current_password') {
        setChangePasswordData({
          type: 'currentPasswordErrTxt',
          payload: ele.message,
        });
      } if (ele.path === 'password_confirmation') {
        setChangePasswordData({
          type: 'passwordConfirmationErrTxt',
          payload: ele.message,
        });
      }
    });
  });
};
