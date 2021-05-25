export const validateProfileData = (schemaEditProfile, data, setEditProfileData) => {
  schemaEditProfile.validate(data, { abortEarly: false }).catch((err) => {
    err.inner.forEach((ele) => {
      if (ele.path === 'first_name') {
        setEditProfileData({
          type: 'firstNameErrTxt',
          payload: ele.message,
        });
      } if (ele.path === 'last_name') {
        setEditProfileData({
          type: 'lastNameErrTxt',
          payload: ele.message,
        });
      } if (ele.path === 'email') {
        setEditProfileData({
          type: 'emailErrTxt',
          payload: ele.message,
        });
      }
    });
  });
};
