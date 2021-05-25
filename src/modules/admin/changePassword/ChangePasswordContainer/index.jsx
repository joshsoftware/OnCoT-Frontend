import React, { useCallback, useReducer } from 'react';
import { toast } from 'react-toastify';
import ChangePasswordComponent from 'modules/admin/changePassword/ChangePasswordComponent';
import * as yup from 'yup';
import { reducer } from 'modules/admin/changePassword/reducer';
import { validateData } from 'modules/admin/changePassword/dataValidation';
import PropTypes from 'prop-types';
import { putChangePasswordApi } from './putChangePasswordApi';

const ChangePasswordContainer = (props) => {
  const initialPasswordState = {
    currentPassword: '',
    password: '',
    passwordConfirmation: '',
    currentPasswordErrTxt: '',
    passwordErrTxt: '',
    passwordConfirmationErrTxt: '',
  };
  const [changePasswordData, setChangePasswordData] = useReducer(reducer, initialPasswordState);
  const {
    changePassVisible,
    setChangePassVisible,
  } = props;

  const schema = yup.object().shape({
    current_password: yup.string().min(6).required('Current Password is required'),
    password: yup.string().min(6).required('Password is required'),
    password_confirmation: yup.string().min(6).required('Password Confirmation is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

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
            setChangePassVisible(false);
            setTimeout(logout, 5000);
            return toast.success('Password changed successfully, Redirecting to login page');
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

  const handleChangePasswordCancel = useCallback(
    (event) => {
      setChangePasswordData({
        type: 'resetPasswordData',
        payload: '',
      });
      setChangePassVisible(false);
    },
    [],
  );

  return (
    changePassVisible &&
    (
      <ChangePasswordComponent
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        handlePasswordChange={handlePasswordChange}
        handleCurrentPasswordChange={handleCurrentPasswordChange}
        handleOnClickChangePassword={handleOnClickChangePassword}
        passwordErrTxt={changePasswordData.passwordErrTxt}
        passwordConfirmationErrTxt={changePasswordData.passwordConfirmationErrTxt}
        currentPasswordErrTxt={changePasswordData.currentPasswordErrTxt}
        handleChangePasswordCancel={handleChangePasswordCancel}
      />
    )
  );
};
ChangePasswordContainer.propTypes = {
  changePassVisible: PropTypes.bool.isRequired,
  setChangePassVisible: PropTypes.func.isRequired,
};

export default React.memo(ChangePasswordContainer);
