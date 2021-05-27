import { useEffect, useReducer, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import InviteUserComponent from 'modules/admin/inviteUser/InviteUserComponent';
import reducer, {
  initialState,
} from 'modules/admin/inviteUser/InviteUserContainer/reducer';
import { sendEmailsApi, getUsersApi } from 'modules/admin/inviteUser/InviteUserContainer/apis';
import local from 'utils/local';

const InviteUserContainer = () => {
  const [loading, setLoading] = useState(false);
  const [usersData, setUsersData] = useReducer(reducer, initialState);
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  const handleInvitationEmails = (event) => {
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

  const validateEmails = (checkEmails) => {
    let flag = false;
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    for (let email = 0; email < checkEmails.length; email += 1) {
      if (!pattern.test(checkEmails[email])) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    if (flag) {
      return true;
    }
  };

  const handleSendInvitation = async () => {
    const allEmails = `${usersData.emails}`.replace(
      /^,|,$/g,
      '',
    );
    const checkEmails = allEmails.split(',');
    if (validateEmails(checkEmails)) {
      const data = {
        emails: checkEmails.join(','),
      };
      setLoading(true);
      try {
        const responseData = await sendEmailsApi(data);
        if (responseData.status === 200) {
          setUsersData({ type: 'EMAILS_SENT_SUCCESS' });
          setLoading(false);
        }
      } catch (error) {
        setUsersData({ type: 'EMAILS_SENT_FAILURE' });
        setLoading(false);
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

  return (
    <>
      <InviteUserComponent
        handleInvitationEmails={handleInvitationEmails}
        handleSendInvitation={handleSendInvitation}
        handleInvitationEmailsErrorMessage={handleInvitationEmailsErrorMessage}
        loading={loading}
        usersData={usersData}
      />
    </>
  );
};

export default InviteUserContainer;
