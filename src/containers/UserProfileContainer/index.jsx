import React, { useReducer, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import UserProfileComponent from 'components/UserProfileComponent';
import { candidateFormRequestAction, candidateFormSuccessAction } from 'actions/candidateFormActions';
import { schema } from 'containers/UserProfileContainer/schema';
import { reducer } from 'containers/UserProfileContainer/reducer';
import { ROUTES, CANDIDATE_ROUTES } from 'constants/routeConstants';

const UserProfileContainer = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.candidateFormReducer);
  const history = useHistory();

  const { nextPageAllowed } = globalState.state;
  const initialState = { value: '', state: { valid: true, message: '' } };
  const initialUserState = {
    fName: initialState,
    lName: initialState,
    mobile: initialState,
  };

  const [userState, setUserState] = useReducer(reducer, initialUserState);
  const [showToast, setShowToast] = useState(false);

  const handleFirstNameChange = useCallback(
    (event) => {
      const fName = event.target.value;
      setUserState({
        type: 'fName',
        payload: { value: fName, state: { valid: true, message: '' } },
      });
    },
    [userState.fName.value],
  );

  const handleLastNameChange = useCallback(
    (event) => {
      const lName = event.target.value;
      setUserState({
        type: 'lName',
        payload: { value: lName, state: { valid: true, message: '' } },
      });
    },
    [userState.lName.value],
  );

  const handleMobileChange = useCallback(
    (event) => {
      const mobile = event.target.value;
      setUserState({
        type: 'mobile',
        payload: { value: mobile, state: { valid: true, message: '' } },
      });
    },
    [userState.mobile.value],
  );

  const { candidateId } = useSelector(
    (state) => state.userDriveReducer,
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const fName = userState.fName.value.trim();
      const lName = userState.lName.value.trim();
      const mobile = userState.mobile.value.trim();
      const currentTime = new Date().toLocaleString();
      const driveID = localStorage.getItem('driveID');
      const token = localStorage.getItem('authToken');

      schema
        .validate(
          {
            fName,
            lName,
            mobile,
          },
          { abortEarly: false },
        )
        .then(() => {
          const data = {
            fName,
            lName,
            mobile,
            updatedAt: currentTime,
            createdAt: currentTime,
            candidateId,
            driveID,
            token,
          };
          dispatch(candidateFormRequestAction(data));
        })
        .catch((error) => {
          error.inner.forEach((e) => {
            switch (e.path) {
              case 'fName':
                setUserState({
                  type: 'fNameInvalid',
                  payload: { valid: false, message: e.message },
                });
                break;

              case 'lName':
                setUserState({
                  type: 'lNameInvalid',
                  payload: { valid: false, message: e.message },
                });
                break;

              case 'mobile':
                setUserState({
                  type: 'mobileInvalid',
                  payload: { valid: false, message: e.message },
                });
                break;

              default:
                break;
            }
          });
        });
    },
    [userState, globalState, history],
  );

  const toggle = () => setShowToast(!showToast);

  if (nextPageAllowed) {
    history.push(ROUTES.CANDIDATE + CANDIDATE_ROUTES.IDE);
  }

  return (
    <UserProfileComponent
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handleMobileChange={handleMobileChange}
      handleSubmit={handleSubmit}
      firstNameIsValid={userState.fName.state}
      lastNameIsValid={userState.lName.state}
      mobileIsValid={userState.mobile.state}
      result={globalState}
      toggle={toggle}
      showToast={showToast}
    />
  );
};

export default React.memo(UserProfileContainer);
