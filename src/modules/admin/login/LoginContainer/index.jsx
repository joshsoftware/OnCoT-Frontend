import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import LoginComponent from 'modules/admin/login/LoginComponent';
import { adminLoginRequestAction } from 'redux/admin/login/action';
import { reducer } from 'modules/admin/login/LoginContainer/reducer';
import { schema } from 'modules/admin/login/LoginContainer/schema';

import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';

const LoginContainer = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const result = useSelector((state) => state.adminLoginReducer);
  useEffect(() => {
    dispatch(adminLoginRequestAction());
  }, [dispatch]);

  const initialUserState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  };
  const [loginState, setLoginState] = useReducer(reducer, initialUserState);

  const handleEmailChange = useCallback(
    (event) => {
      const email = event.target.value;
      setLoginState({
        type: 'email',
        payload: email,
      });
      schema.validate({ email }).then(() => {
        setLoginState({
          type: 'emailError',
          payload: '',
        });
      });
    },
    [loginState],
  );

  const handlePasswordChange = useCallback(
    (event) => {
      const password = event.target.value;
      setLoginState({
        type: 'password',
        payload: password,
      });
      schema
        .validate({
          password,
        })
        .then(() => {
          setLoginState({
            type: 'passwordError',
            payload: '',
          });
        });
    },
    [loginState],
  );

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const { email } = loginState;
    const { password } = loginState;

    schema
      .validate(
        {
          email,
          password,
        },
        { abortEarly: false },
      )
      .then(() => {
        const data = {
          email,
          password,
        };
        setLoginState({
          type: 'emailError',
          payload: '',
        });
        const adminHome = ROUTES.ADMIN + ADMIN_ROUTES.HOME;
        history.push(adminHome);
      })
      .catch((error) => {
        error.inner.forEach((e) => {
          switch (e.path) {
            case 'email':
              setLoginState({
                type: 'emailError',
                payload: e.message,
              });
              break;
            case 'password':
              setLoginState({
                type: 'passwordError',
                payload: e.message,
              });
              break;

            default:
              break;
          }
        });
      });
  });

  return (
    <LoginComponent
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
      emailError={loginState.emailError}
      passwordError={loginState.passwordError}
    />
  );
};

export default React.memo(LoginContainer);
