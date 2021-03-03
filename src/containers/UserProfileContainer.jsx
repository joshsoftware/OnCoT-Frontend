import { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import produce from 'immer';

import UserProfileComponent from 'components/UserProfileComponent';
import { candidateFormRequestAction } from 'actions/candidateFormActions';

const schema = yup.object().shape({
  fName: yup.string()
    .required('First name is a required field')
    .matches(/^[A-Za-z '.-]*$/, 'First name should be valid'),

  lName: yup.string()
    .required('Last name is a required field')
    .matches(/^[A-Za-z '.-]*$/, 'Last name should be valid'),

  mobile: yup.string()
    .max(10, 'Mobile should be a valid 10-digit numeric value')
    .min(10, 'Mobile should be a valid 10-digit numeric value'),
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'fName':
      return produce(state, (draft) => {
        draft.fName.value = action.payload.value;
        draft.fName.state = action.payload.state;
      });

    case 'lName':
      return produce(state, (draft) => {
        draft.lName.value = action.payload.value;
        draft.lName.state = action.payload.state;
      });

    case 'mobile':
      return produce(state, (draft) => {
        draft.mobile.value = action.payload.value;
        draft.mobile.state = action.payload.state;
      });

    case 'fNameInvalid':
      return produce(state, (draft) => { draft.fName.state = action.payload; });

    case 'lNameInvalid':
      return produce(state, (draft) => { draft.lName.state = action.payload; });

    case 'mobileInvalid':
      return produce(state, (draft) => { draft.mobile.state = action.payload; });

    default: return state;
  }
};

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

  const handleFirstNameChange = (event) => {
    const fName = event.target.value;
    setUserState({ type:'fName', payload:{ value: fName, state: { valid:true, message:'' } } });
  };

  const handleLastNameChange = (event) => {
    const lName = event.target.value;
    setUserState({ type:'lName', payload:{ value: lName, state: { valid:true, message:'' } } });
  };

  const handleMobileChange = (event) => {
    const mobile = event.target.value;
    setUserState({ type:'mobile', payload:{ value: mobile, state: { valid:true, message:'' } } });
  };

  const handleSubmit = (event) => {
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
  };

  const toggle = () => setShowToast(globalState.error);

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
export default UserProfileContainer;
