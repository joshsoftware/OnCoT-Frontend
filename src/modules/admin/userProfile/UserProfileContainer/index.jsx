import React, { useCallback, useEffect, useState, useReducer } from 'react';
import local from 'utils/local';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import UserProfileComponent from 'modules/admin/userProfile/UserProfileComponent';
import * as yup from 'yup';
import { reducer } from 'modules/admin/userProfile/reducer';
import { editProfileReducer } from 'modules/admin/userProfile/editProfileReducer';
import { validateData } from 'modules/admin/userProfile/dataValidation';
import { validateProfileData } from 'modules/admin/userProfile/profileDataValidation';
import { putChangePasswordApi } from './putChangePasswordApi';
import { putEditProfileApi } from './putEditProfileApi';

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
  const initialProfileState = {
    firstName: '',
    lastName: '',
    email: '',
    firstNameErrTxt: '',
    lastNameErrTxt: '',
    emailErrTxt: '',
  };
  const [changePasswordData, setChangePasswordData] = useReducer(reducer, initialPasswordState);
  const [editProfileData, setEditProfileData] = useReducer(editProfileReducer, initialProfileState);
  const [status, setStatus] = useState({ changePassword: false, editProfile: false });

  const schema = yup.object().shape({
    current_password: yup.string().min(6).required('Current Password is required'),
    password: yup.string().min(6).required('Password is required'),
    password_confirmation: yup.string().min(6).required('Password Confirmation is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const schemaEditProfile = yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup.string().email().required('Email is requires'),
  });

  useEffect(async () => {
    setEditProfileData({
      type: 'setProfileData',
      payload: {
        firstName: profileDetails.first_name,
        lastName: profileDetails.last_name,
        email: profileDetails.email,
      },
    });
  }, []);

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
            setStatus({ changePassword: false, editProfile: false });
            setTimeout(logout, 5000);
            return toast.success('Password changed successfully, login again');
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

  const handleFirstNameChange = useCallback(
    (event) => {
      const firstName = event.target.value;
      setEditProfileData({
        type: 'firstNameErrTxt',
        payload: '',
      });
      setEditProfileData({
        type: 'firstName',
        payload: firstName,
      });
    },
    [editProfileData.firstName],
  );

  const handleLastNameChange = useCallback(
    (event) => {
      const lastName = event.target.value;
      setEditProfileData({
        type: 'lastNameErrTxt',
        payload: '',
      });
      setEditProfileData({
        type: 'lastName',
        payload: lastName,
      });
    },
    [editProfileData.lastName],
  );

  const handleEmailChange = useCallback(
    (event) => {
      const email = event.target.value;
      setEditProfileData({
        type: 'emailErrTxt',
        payload: '',
      });
      setEditProfileData({
        type: 'email',
        payload: email,
      });
    },
    [editProfileData.email],
  );

  const handleEditCancelClick = useCallback(
    (event) => {
      setEditProfileData({
        type: 'setProfileData',
        payload: {
          firstName: profileDetails.first_name,
          lastName: profileDetails.last_name,
          email: profileDetails.email,
        },
      });
      setStatus({ changePassword: false, editProfile: false });
    },
    [],
  );

  const handleChangePasswordCancel = useCallback(
    (event) => {
      setChangePasswordData({
        type: 'resetPasswordData',
        payload: '',
      });
      setStatus({ changePassword: false, editProfile: false });
    },
    [],
  );

  const handleOnClickEdit = useCallback(
    (event) => {
      const { firstName, lastName, email } = editProfileData;
      const data = {
        id: profileDetails.id,
        first_name: firstName,
        last_name: lastName,
        email,
      };
      schemaEditProfile.isValid(data).then(async (valid) => {
        if (!valid) {
          validateProfileData(schemaEditProfile, data, setEditProfileData);
        } else {
          const result = await putEditProfileApi(data);
          if (result.result.status === 200) {
            const userDetails = result.result.data.data.user;
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
            setEditProfileData({
              type: 'setProfileData',
              payload: {
                firstName: userDetails.first_name,
                lastName: userDetails.last_name,
                email: userDetails.email,
              },
            });
            setStatus({ changePassword: false, editProfile: false });
            if (localStorage.getItem('uid') !== userDetails.email) {
              setTimeout(logout, 5000);
              return toast.success('Profile edited successfully, login again');
            }
            return toast.success('Profile edited successfully');
          }
          return toast.error('Something went wrong, try again');
        }
      });
    }, [editProfileData.firstName, editProfileData.lastName,
      editProfileData.email],
  );

  return (
    <UserProfileComponent
      profileDetails={profileDetails}
      handleConfirmPasswordChange={handleConfirmPasswordChange}
      handlePasswordChange={handlePasswordChange}
      handleCurrentPasswordChange={handleCurrentPasswordChange}
      handleOnClickEdit={handleOnClickEdit}
      handleOnClickChangePassword={handleOnClickChangePassword}
      passwordErrTxt={changePasswordData.passwordErrTxt}
      passwordConfirmationErrTxt={changePasswordData.passwordConfirmationErrTxt}
      currentPasswordErrTxt={changePasswordData.currentPasswordErrTxt}
      status={status}
      setStatus={setStatus}
      firstNameErrTxt={editProfileData.firstNameErrTxt}
      lastNameErrTxt={editProfileData.lastNameErrTxt}
      emailErrTxt={editProfileData.emailErrTxt}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handleEmailChange={handleEmailChange}
      handleEditCancelClick={handleEditCancelClick}
      handleChangePasswordCancel={handleChangePasswordCancel}
    />
  );
};

export default React.memo(UserProfileContainer);
