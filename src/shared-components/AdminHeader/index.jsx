import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import AdminHeader from 'shared-components/AdminHeader/AdminHeader';

const HeaderIDEConatiner = () => {
  const dispatch = useDispatch();
  const organisationName = 'Josh Software';
  const adminName = 'HR Admin';

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const handleProfileClick = (e) => {
    dispatch({
      type: 'USER_PROFILE',
      payload: 'USER_PROFILE',
    });
  };

  return (
    <>
      <AdminHeader
        organisationName={organisationName}
        adminName={adminName}
        handleLogout={handleLogout}
        handleProfileClick={handleProfileClick}
      />
    </>
  );
};

export default React.memo(HeaderIDEConatiner);
