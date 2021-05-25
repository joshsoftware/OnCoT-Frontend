import React, { useCallback, useEffect, useState, useReducer } from 'react';
import { toast } from 'react-toastify';
import EditProfileComponent from 'modules/admin/editProfile/EditProfileComponent';
import * as yup from 'yup';
import { editProfileReducer } from 'modules/admin/editProfile/editProfileReducer';
import { validateProfileData } from 'modules/admin/editProfile/profileDataValidation';
import PropTypes from 'prop-types';
import { putEditProfileApi } from './putEditProfileApi';

const EditProfileContainer = (props) => {
  const profileDetails = JSON.parse(localStorage.getItem('userDetails'));
  const initialProfileState = {
    firstName: '',
    lastName: '',
    email: '',
    firstNameErrTxt: '',
    lastNameErrTxt: '',
    emailErrTxt: '',
  };
  const [editProfileData, setEditProfileData] = useReducer(editProfileReducer, initialProfileState);
  const {
    editProfileVisible,
    setEditProfileVisible,
  } = props;

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
      setEditProfileVisible(false);
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
            setEditProfileVisible(false);
            if (localStorage.getItem('uid') !== userDetails.email) {
              setTimeout(logout, 5000);
              return toast.success('Update Successful, Email updated, redirecting to login page');
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
    editProfileVisible &&
    (
      <EditProfileComponent
        profileDetails={profileDetails}
        handleOnClickEdit={handleOnClickEdit}
        firstNameErrTxt={editProfileData.firstNameErrTxt}
        lastNameErrTxt={editProfileData.lastNameErrTxt}
        emailErrTxt={editProfileData.emailErrTxt}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleEmailChange={handleEmailChange}
        handleEditCancelClick={handleEditCancelClick}
      />
    )
  );
};
EditProfileContainer.propTypes = {
  editProfileVisible: PropTypes.bool.isRequired,
  setEditProfileVisible: PropTypes.func.isRequired,
};

export default React.memo(EditProfileContainer);
