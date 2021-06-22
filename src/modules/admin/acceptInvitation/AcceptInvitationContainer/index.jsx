import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory, useParams } from 'react-router-dom';

import AcceptInvitationComponent from 'modules/admin/acceptInvitation/AcceptInvitationComponent';
import { adminLoginRequestAction } from 'redux/admin/login/action';
import { reducer } from 'modules/admin/acceptInvitation/AcceptInvitationContainer/reducer';
import { schema } from 'modules/admin/acceptInvitation/AcceptInvitationContainer/schema';
import { validateData } from 'modules/admin/acceptInvitation/dataValidation';
import { acceptInvitationPutApi } from 'modules/admin/acceptInvitation/api';

import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';
import { toast } from 'react-toastify';

const AcceptInvitationContainer = () => {
  console.log('hi');
  const history = useHistory();

  const dispatch = useDispatch();
  const { isAuth, isLoading, isError, errorMessage }
    = useSelector((state) => state.adminLoginReducer);

  if (localStorage.getItem('accessToken')) {
    history.push(ROUTES.ADMIN + ADMIN_ROUTES.HOME);
  }
  const { token } = useParams();

  const initialUserState = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    password: '',
    passwordConfirmation: '',
    firstNameError: '',
    lastNameError: '',
    mobileNumberError: '',
    passwordError: '',
    passwordConfirmationError: '',
  };
  const [signUpState, setSignUpState] = useReducer(reducer, initialUserState);
  const [error, setError] = useState('');

  const handleFirstNameChange = useCallback(
    (event) => {
      const firstName = event.target.value;
      setSignUpState({
        type: 'firstName',
        payload: firstName,
      });
    }, [signUpState],
  );
  const handleLastNameChange = useCallback(
    (event) => {
      const lastName = event.target.value;
      setSignUpState({
        type: 'lastName',
        payload: lastName,
      });
    }, [],
  );

  const handleMobileNumberChange = useCallback(
    (event) => {
      const mobileNumber = event.target.value;
      setSignUpState({
        type: 'mobileNumber',
        payload: mobileNumber,
      });
    }, [],
  );

  const handlePasswordChange = useCallback(
    (event) => {
      const password = event.target.value;
      setSignUpState({
        type: 'password',
        payload: password,
      });
    }, [],
  );

  const handlePasswordConfirmationChange = useCallback(
    (event) => {
      const passwordConfirmation = event.target.value;
      setSignUpState({
        type: 'passwordConfirmation',
        payload: passwordConfirmation,
      });
    }, [],
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const { firstName, lastName, mobileNumber,
        password, passwordConfirmation } = signUpState;
      const data = {
        first_name: firstName,
        last_name: lastName,
        mobile_number: mobileNumber,
        password,
        password_confirmation: passwordConfirmation,
        invitation_token: token,
      };

      schema.isValid(data).then(async (valid) => {
        if (!valid) {
          validateData(schema, data, setSignUpState);
        } else {
          const response = await acceptInvitationPutApi(data);
          setError(response.data.message);
          if (response.data.status === 404) {
            return toast.error(response.data.message);
          }
          const loginData = {
            email: response.data.data.user.email,
            password,
          };
          dispatch(adminLoginRequestAction(loginData));
        }
      });
    }, [signUpState],
  );

  if (isAuth) {
    history.push(ROUTES.ADMIN + ADMIN_ROUTES.HOME);
  }

  return (
    <AcceptInvitationComponent
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handleMobileNumberChange={handleMobileNumberChange}
      handlePasswordChange={handlePasswordChange}
      handlePasswordConfirmationChange={handlePasswordConfirmationChange}
      handleSubmit={handleSubmit}
      signUpState={signUpState}
      isLoading={isLoading}
      isError={isError}
      errorMessage={errorMessage}
      error={error}
    />
  );
};

export default React.memo(AcceptInvitationContainer);
