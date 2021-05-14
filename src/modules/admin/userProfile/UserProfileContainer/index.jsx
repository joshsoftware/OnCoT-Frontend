import React, { useCallback, useEffect } from 'react';
import local from 'utils/local';
import { useSelector } from 'react-redux';
import UserProfileComponent from 'modules/admin/userProfile/UserProfileComponent';

const UserProfileContainer = () => {
  // const { firstName, lastName, emailId, isAuth, isLoading, isError, errorMessage } = useSelector(
  //   (state) => state.adminLoginReducer,
  // );
  const profileDetails = JSON.parse(localStorage.getItem('userDetails'));

  return (
    <UserProfileComponent profileDetails={profileDetails} />
  );
};

export default React.memo(UserProfileContainer);
