import React, { useReducer, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserProfileComponent from 'components/UserProfileComponent';
import { candidateFormRequestAction } from 'actions/candidateFormActions';
import { schema } from 'containers/UserProfileContainer/schema';
import { reducer } from 'containers/UserProfileContainer/reducer';

const UserProfileContainer = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const initialUserState = {
    fName: { value: '', state: { valid:true, message:'' } },
    lName: { value: '', state: { valid:true, message:'' } },
    mobile: { value: '', state: { valid:true, message:'' } },
  };

  const [userState, setUserState] = useReducer(reducer, initialUserState);
  const [showToast, setShowToast] = useState(false);

  const handleFirstNameChange = useCallback((event) => {
    const fName = event.target.value;
    setUserState({ type:'fName', payload:{ value: fName, state: { valid:true, message:'' } } });
  }, [userState.fName.value]);

  const handleLastNameChange = useCallback((event) => {
    const lName = event.target.value;
    setUserState({ type:'lName', payload:{ value: lName, state: { valid:true, message:'' } } });
  }, [userState.lName.value]);

  const handleMobileChange = useCallback((event) => {
    const mobile = event.target.value;
    setUserState({ type:'mobile', payload:{ value: mobile, state: { valid:true, message:'' } } });
  }, [userState.mobile.value]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const fName = userState.fName.value.trim();
    const lName = userState.lName.value.trim();
    const mobile = userState.mobile.value.trim();

    schema.validate({
      fName,
      lName,
      mobile,
    }, { abortEarly:false })
      .then(() => {
        const data = { fName, lName, mobile };
        dispatch(candidateFormRequestAction(data));
      })
      .catch((error) => {
        error.inner.forEach((e) => {
          switch (e.path) {
            case 'fName':
              setUserState({
                type:'fNameInvalid',
                payload:{ valid:false, message:e.message } });
              break;

            case 'lName':
              setUserState({
                type:'lNameInvalid',
                payload:{ valid:false, message:e.message } });
              break;

            case 'mobile':
              setUserState({
                type:'mobileInvalid',
                payload:{ valid:false, message:e.message } });
              break;

            default:
              break;
          }
        });
      });
  }, [userState]);

  const toggle = useCallback(() => setShowToast(globalState.error), [globalState.error]);

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
