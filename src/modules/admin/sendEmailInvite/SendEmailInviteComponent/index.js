import PropTypes from 'prop-types';
import React from 'react';
import 'modules/admin/sendEmailInvite/SendEmailInviteComponent/styles.css';
import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
  FormFeedback,
  Alert,
} from 'core-components';

const SendEmailInviteComponent = (props) => {
  const { emailsState,
    handleInvitationEmails,
    handleUploadedInvitationEmails,
    handleSendInvitation,
    handleSubmit,
    handleCancel,
    loading,
    handleCsvRemove,
    handleInvitationEmailsErrorMessage,
  } = props;

  const { emails,
    emailsError,
    csvFileError,
    successMessage,
  } = emailsState;

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      {successMessage !== '' && <Alert>{successMessage}</Alert>}
      <Container fluid className='h-100'>
        <div className='h-100'>
          <Row className='px-3 pt-3'>
            <h3>Invite Candidate</h3>
          </Row>
          <Row className='p-3'>
            <Form className='w-100' onSubmit={handleSubmit} method='post'>
              <FormGroup className='px-3 w-50'>
                <Label>
                  <span className='inline'>
                    <h4 className='inline'>Enter Emails</h4>
                    <p className='inline'> (Comma separated) </p>
                  </span>
                </Label>
                <Input
                  type='text'
                  placeholder='Enter candidate email'
                  value={emails}
                  onChange={handleInvitationEmails}
                  onClick={handleInvitationEmailsErrorMessage}
                  invalid={emailsError !== ''}
                />
                <FormFeedback>{emailsError}</FormFeedback>
              </FormGroup>
              <Row className='p-3'>
                <h4>OR</h4>
              </Row>
              <FormGroup className='px-3 w-50'>
                <Label>
                  <h4>Upload CSV file</h4>
                </Label>
                <Input
                  type='file'
                  name='Selectfile'
                  id='selectFile'
                  onChange={handleUploadedInvitationEmails}
                  invalid={csvFileError !== ''}
                />
                <FormFeedback>{csvFileError}</FormFeedback>
              </FormGroup>
              <FormGroup className='mt-6'>
                <Button className='mr-3 mt-3 bg-success' onClick={handleSendInvitation}>
                  Send Invitation
                </Button>
                <Button type='reset' className='ml-3 mr-3 mt-3 bg-warning' onClick={handleCsvRemove}>Clear CSV File</Button>
                <Button className='ml-3 mt-3 bg-danger' onClick={handleCancel}>Cancel</Button>
              </FormGroup>
            </Form>
          </Row>
        </div>
      </Container>
    </>
  );
};

SendEmailInviteComponent.propTypes = {
  emails: PropTypes.string.isRequired,
  handleInvitationEmails: PropTypes.func.isRequired,
  handleUploadedInvitationEmails: PropTypes.func.isRequired,
  handleSendInvitation: PropTypes.func.isRequired,
  emailsError: PropTypes.string.isRequired,
  csvFileError: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
  handleCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  handleCsvRemove: PropTypes.func.isRequired,
  handleInvitationEmailsErrorMessage: PropTypes.func.isRequired,
  emailsState: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SendEmailInviteComponent;
