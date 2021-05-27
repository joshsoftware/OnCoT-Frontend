import PropTypes from 'prop-types';
import React from 'react';
import 'modules/admin/inviteUser/InviteUserComponent/styles.css';
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
  Table,
} from 'core-components';
import { useDispatch } from 'react-redux';

const InviteUserComponent = (props) => {
  const dispatch = useDispatch();
  const {
    handleInvitationEmails,
    handleSendInvitation,
    handleSubmit,
    loading,
    handleInvitationEmailsErrorMessage,
    usersData,
  } = props;

  const { emails, emailsError, successMessage, users } = usersData;

  return (
    <>
      <Container fluid className='h-100'>
        {successMessage !== '' && <Alert>{successMessage}</Alert>}
        <div className='h-100'>
          <Row className='p-3'>
            <FormGroup className='pt-3 pl-3 w-100'>
              <Label>
                <h3>Users</h3>
              </Label>
              <Table dark className='overflow-y-scrollable h-30 fixed table-bordered'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((userIterator, key) => {
                      return (
                        <tr>
                          <td> {key + 1} </td>
                          <td> {userIterator.first_name} </td>
                          <td> {userIterator.last_name} </td>
                          <td> {userIterator.email} </td>
                          <td> {userIterator.mobile_number} </td>
                          <td> {userIterator.role} </td>
                          <td>
                            <Button onClick={() => window.confirm('Are you sure you wish to delete this item?') && (userIterator.id)} className='btn btn-sm btn-danger button_margin'>Delete</Button>
                          </td>
                        </tr>
                      );
                    })
                  }
                </tbody>

              </Table>
            </FormGroup>
            <Row className='px-3 pt-3 pb-3'>
              <h3>Invite Users</h3>
            </Row>
            <Form className='w-100' onSubmit={handleSubmit} method='post'>
              <FormGroup className='px-3 w-50'>
                <Label>
                  <span className='inline'>
                    <h4 className='inline'>Enter Email(s)</h4>
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

              <FormGroup className='mt-6 '>
                <Button
                  className='mr-3 mt-3 bg-success'
                  onClick={handleSendInvitation}
                >
                  Send Invitation
                </Button>
              </FormGroup>
            </Form>
          </Row>
        </div>
      </Container>
    </>
  );
};

InviteUserComponent.propTypes = {
  emails: PropTypes.string.isRequired,
  handleInvitationEmails: PropTypes.func.isRequired,
  handleSendInvitation: PropTypes.func.isRequired,
  emailsError: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  handleInvitationEmailsErrorMessage: PropTypes.func.isRequired,
  usersData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default InviteUserComponent;
