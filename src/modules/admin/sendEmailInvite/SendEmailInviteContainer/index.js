import { useReducer, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import SendEmailInviteComponent from 'modules/admin/sendEmailInvite/SendEmailInviteComponent';
import reducer, { initialState } from 'modules/admin/sendEmailInvite/SendEmailInviteContainer/reducer';
import sendEmails from 'modules/admin/sendEmailInvite/SendEmailInviteContainer/sendEmails';

const SendEmailInviteContainer = () => {
  const [emailsState, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const { drifeid } = useParams();

  const handleInvitationEmails = (event) => {
    dispatch({ type: 'VALID_EMAIL', payload: event.target.value });
  };

  const handleUploadedInvitationEmails = async (e) => {
    if (e.target.files[0].type === 'text/csv') {
      let csvEmailText = await e.target.files[0].text();
      csvEmailText = csvEmailText.replace(/(\n)/gm, ',');
      const finalCsvEmailText = csvEmailText.replace(/,\s*$/, '');
      dispatch({ type: 'VALID_CSV_FILETYPE', payload: finalCsvEmailText });
    } else {
      dispatch({ type: 'INVALID_CSV_FILETYPE' });
    }
  };

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
    const allEmails = (`${emailsState.emails},${emailsState.csvEmails}`).replace(/^,|,$/g, '');
    const checkEmails = allEmails.split(',');
    if (validateEmails(checkEmails)) {
      const data = {
        emails: checkEmails.join(','),
        drife_id: parseInt(drifeid, 10),
      };
      setLoading(true);
      try {
        const responseData = await sendEmails(data);
        if (responseData.message === 'ok') {
          dispatch({ type: 'EMAILS_SENT_SUCCESS' });
          setLoading(false);
        }
      } catch (error) {
        dispatch({ type: 'EMAILS_SENT_FAILURE' });
        setLoading(false);
      }
    } else {
      dispatch({ type: 'INVALID_EMAIL' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCancel = (event) => {
    event.preventDefault(); // Use Redirect to container when the dependent component is ready
  };

  const handleCsvRemove = () => {
    dispatch({ type: 'VALID_CSV_FILETYPE', payload: '' });
  };

  const handleInvitationEmailsErrorMessage = (event) => {
    dispatch({ type: 'VALID_EMAIL', payload: event.target.value });
  };

  return (
    <>
      <SendEmailInviteComponent
        emailsState={emailsState}
        handleInvitationEmails={handleInvitationEmails}
        handleUploadedInvitationEmails={handleUploadedInvitationEmails}
        handleSendInvitation={handleSendInvitation}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleCsvRemove={handleCsvRemove}
        handleInvitationEmailsErrorMessage={handleInvitationEmailsErrorMessage}
        loading={loading}
      />
    </>
  );
};

export default SendEmailInviteContainer;