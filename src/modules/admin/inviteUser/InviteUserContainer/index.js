import { useEffect, useReducer, useState, useCallback } from 'react';
import InviteUserComponent from 'modules/admin/inviteUser/InviteUserComponent';
import reducer, {
  initialState,
} from 'modules/admin/inviteUser/InviteUserContainer/reducer';
import { sendEmailsApi, getUsersApi } from 'modules/admin/inviteUser/InviteUserContainer/apis';

const InviteUserContainer = () => {
  const [loading, setLoading] = useState(false);
  const [usersData, setUsersData] = useReducer(reducer, initialState);
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  const handleInvitationEmails = (event) => {
    setUsersData({
      type: 'USER_EXIST_FAILURE',
      payload: '',
    });
    setUsersData({ type: 'VALID_EMAIL', payload: event.target.value });
  };

  useEffect(async () => {
    const response = await getUsersApi(userDetails.organization_id);
    const { users } = response.data.data;
    if (users) {
      setUsersData({
        type: 'SET_USERS',
        payload: users,
      });
    }
  }, []);

  const validateEmail = (email) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!pattern.test(email)) {
      return false;
    }
    return true;
  };

  const handleSendInvitation = async () => {
    const { email, role } = usersData;

    if (validateEmail(email)) {
      if (role !== '') {
        const data = {
          email,
          role,
        };
        setLoading(true);
        try {
          const responseData = await sendEmailsApi(data);
          if (responseData.data.status === 400) {
            setUsersData({ type: 'USER_EXIST_FAILURE', payload: responseData.data.message });
            setLoading(false);
          } else if (responseData.status === 200) {
            setUsersData({ type: 'EMAILS_SENT_SUCCESS' });
            setLoading(false);
          }
        } catch (error) {
          setUsersData({ type: 'EMAILS_SENT_FAILURE' });
          setLoading(false);
        }
      } else {
        setUsersData({ type: 'SET_ROLE_ERROR', payload: 'Please select role' });
      }
    } else {
      setUsersData({ type: 'INVALID_EMAIL' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInvitationEmailsErrorMessage = (event) => {
    setUsersData({ type: 'VALID_EMAIL', payload: event.target.value });
  };

  const handleSelectedRoleChange = useCallback(
    (event) => {
      const role = event.value;
      setUsersData({
        type: 'SET_ROLE_ERROR',
        payload: '',
      });
      setUsersData({
        type: 'USER_EXIST_FAILURE',
        payload: '',
      });
      setUsersData({
        type: 'SET_ROLE',
        payload: role,
      });
    }, [],
  );

  return (
    <>
      <InviteUserComponent
        handleInvitationEmails={handleInvitationEmails}
        handleSendInvitation={handleSendInvitation}
        handleInvitationEmailsErrorMessage={handleInvitationEmailsErrorMessage}
        loading={loading}
        usersData={usersData}
        handleSelectedRoleChange={handleSelectedRoleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default InviteUserContainer;
