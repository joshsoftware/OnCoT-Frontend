import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';
import { useDispatch } from 'react-redux';
import AdminHeader from 'shared-components/AdminHeader/AdminHeader';

const HeaderIDEConatiner = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const organisationName = 'Josh Software';
  const adminName = 'HR Admin';

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const handleProfileClick = (e) => {
    history.push(ROUTES.ADMIN + ADMIN_ROUTES.USER_PROFILE);
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
