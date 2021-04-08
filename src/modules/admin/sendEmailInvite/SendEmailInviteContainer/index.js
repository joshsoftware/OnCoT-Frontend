import { useState } from 'react';
import SendEmailInviteComponent from 'modules/admin/sendEmailInvite/SendEmailInviteComponent';
import { Redirect, useParams } from 'react-router';
import sendEmails from 'modules/admin/sendEmailInvite/SendEmailInviteContainer/sendEmails';

const SendEmailInviteContainer = () => {
  const [emails, setEmails] = useState('');
  const [csvEmails, setCsvEmails] = useState('');
  const [emailsError, setEmailsError] = useState('');
  const [csvFileError, setCsvFileError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { drifeid } = useParams();

  const handleInvitationEmails = (event) => {
    setEmails(event.target.value);
  };

  const handleUploadedInvitationEmails = async (e) => {
    if (e.target.files[0].type === 'text/csv') {
      setCsvFileError('');
      let text = await e.target.files[0].text();
      text = text.replace(/(\n)/gm, ',');
      const text1 = text.replace(/,\s*$/, '');
      setCsvEmails(text1);
    } else {
      setCsvFileError('Invalid file type.Content will be ignored(.csv needed)');
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
    const allEmails = (`${emails},${csvEmails}`).replace(/^,|,$/g, '');
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
          setSuccessMessage('Email Invitations Sent Successfully!');
          setEmailsError('');
          setEmails('');
          setCsvEmails('');
          setCsvFileError('');
          setLoading(false);
        }
      } catch (error) {
        setSuccessMessage('Something Went Wrong!');
        setEmailsError('');
        setCsvFileError('');
        setCsvEmails('');
        setLoading(false);
      }
    } else {
      setEmailsError('Invalid Email[s]');
      setSuccessMessage('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCancel = (event) => {
    event.preventDefault(); // Need to change when redirecting is available
  };

  const handleCsvRemove = () => {
    setCsvFileError('');
    setCsvEmails('');
  };

  const handleInvitationEmailsErrorMessage = () => {
    setEmailsError('');
  };

  return (
    <>
      <SendEmailInviteComponent
        emails={emails}
        emailsError={emailsError}
        handleInvitationEmails={handleInvitationEmails}
        handleUploadedInvitationEmails={handleUploadedInvitationEmails}
        handleSendInvitation={handleSendInvitation}
        csvFileError={csvFileError}
        handleSubmit={handleSubmit}
        successMessage={successMessage}
        handleCancel={handleCancel}
        loading={loading}
        handleCsvRemove={handleCsvRemove}
        handleInvitationEmailsErrorMessage={handleInvitationEmailsErrorMessage}
      />
    </>
  );
};

export default SendEmailInviteContainer;
