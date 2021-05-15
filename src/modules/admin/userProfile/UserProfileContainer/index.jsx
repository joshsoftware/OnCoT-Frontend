import React, { useCallback, useEffect, useState, useReducer } from 'react';
import local from 'utils/local';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import UserProfileComponent from 'modules/admin/userProfile/UserProfileComponent';
import * as yup from 'yup';
import { reducer } from 'modules/admin/userProfile/reducer';
import { validateData } from 'modules/admin/userProfile/dataValidation';
import { putChangePasswordApi } from './putChangePasswordApi';

const UserProfileContainer = () => {
  const profileDetails = JSON.parse(localStorage.getItem('userDetails'));
  const initialPasswordState = {
    currentPassword: '',
    password: '',
    passwordConfirmation: '',
    currentPasswordErrTxt: '',
    passwordErrTxt: '',
    passwordConfirmationErrTxt: '',
  };
  const [changePasswordData, setChangePasswordData] = useReducer(reducer, initialPasswordState);
  const [status, setStatus] = useState({ changePassword: false, editProfile: false });

  const schema = yup.object().shape({
    current_password: yup.string().min(6).required('Current Password is required'),
    password: yup.string().min(6).required('Password is required'),
    password_confirmation: yup.string().min(6).required('Password Confirmation is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const handlePasswordChange = useCallback(
    (event) => {
      const password = event.target.value;
      setChangePasswordData({
        type: 'resetErrTxt',
        payload: '',
      });
      setChangePasswordData({
        type: 'password',
        payload: password,
      });
    },
    [changePasswordData.password],
  );

  const handleConfirmPasswordChange = useCallback(
    (event) => {
      const passwordConfirmation = event.target.value;
      setChangePasswordData({
        type: 'passwordConfirmationErrTxt',
        payload: '',
      });
      setChangePasswordData({
        type: 'passwordConfirmation',
        payload: passwordConfirmation,
      });
    },
    [changePasswordData.confirmPassword],
  );

  const handleCurrentPasswordChange = useCallback(
    (event) => {
      const currentPassword = event.target.value;
      setChangePasswordData({
        type: 'currentPasswordErrTxt',
        payload: '',
      });
      setChangePasswordData({
        type: 'currentPassword',
        payload: currentPassword,
      });
    },
    [changePasswordData.currentPassword],
  );

  const handleOnClickChangePassword = useCallback(
    (event) => {
      const { passwordConfirmation, password, currentPassword } = changePasswordData;
      const data = {
        password_confirmation: passwordConfirmation,
        password,
        current_password: currentPassword,
      };
      schema.isValid(data).then(async (valid) => {
        if (!valid) {
          validateData(schema, data, setChangePasswordData);
        } else {
          const result = await putChangePasswordApi(data);
          if (result.result.status === 200) {
            setChangePasswordData({
              type: 'resetPasswordData',
              payload: '',
            });
            setStatus({ changePassword: false, editProfile: false });
            return toast.success('Password changed successfully');
          }
          const error = result.result.response.data.errors.full_messages.join(', ');
          setChangePasswordData({
            type: 'currentPasswordErrTxt',
            payload: error,
          });
        }
      });
    }, [changePasswordData.password, changePasswordData.passwordConfirmation,
      changePasswordData.currentPassword],
  );

  return (
    <UserProfileComponent
      profileDetails={profileDetails}
      handleConfirmPasswordChange={handleConfirmPasswordChange}
      handlePasswordChange={handlePasswordChange}
      handleCurrentPasswordChange={handleCurrentPasswordChange}
      // handleOnClickEdit={handleOnClickEdit}
      handleOnClickChangePassword={handleOnClickChangePassword}
      passwordErrTxt={changePasswordData.passwordErrTxt}
      passwordConfirmationErrTxt={changePasswordData.passwordConfirmationErrTxt}
      currentPasswordErrTxt={changePasswordData.currentPasswordErrTxt}
      status={status}
      setStatus={setStatus}
    />
  );
};

export default React.memo(UserProfileContainer);
