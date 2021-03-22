/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginComponent from 'modules/admin/login/LoginComponent';
import { adminLoginRequestAction } from 'redux/admin/login/action';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.adminLoginReducer);
  useEffect(() => {
    dispatch(adminLoginRequestAction());
  }, [dispatch]);
  return <LoginComponent />;
};

export default React.memo(LoginContainer);
