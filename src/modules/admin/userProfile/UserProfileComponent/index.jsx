import PropTypes from 'prop-types';
import React, { Component, useState } from 'react';
// import { set } from 'react-redux';
import './style.css';
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Spinner,
  Table,
  Row,
  Col,
  Container,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Button,
} from 'core-components';

const UserProfileComponent = (props) => {
  const {
    profileDetails,
    inputErrTxt,
    outputErrTxt,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
  } = props;
  const { first_name, last_name, email, id } = profileDetails;

  const [status, setStatus] = useState({ changePassword: false, editProfile: false });

  if (typeof email === 'undefined') {
    return <Spinner />;
  }

  const renderEditProfileForm = () => {
    return (
      <div>
        <br />
        <br />
        <Label>
          <h3>Edit User Information</h3>
        </Label>
        <FormGroup>
          <Label>
            <h6>First Name</h6>
          </Label>
          <Input
            type='text'
            invalid={inputErrTxt !== ''}
            onChange={handleFirstNameChange}
            defaultValue={first_name}
            className='w-50'
          />
          <FormFeedback>{inputErrTxt}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>
            <h6>Last Name</h6>
          </Label>
          <Input
            type='text'
            invalid={inputErrTxt !== ''}
            onChange={handleFirstNameChange}
            defaultValue={last_name}
            className='w-50'
          />
          <FormFeedback>{inputErrTxt}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>
            <h6>Email</h6>
          </Label>
          <Input
            type='text'
            invalid={inputErrTxt !== ''}
            onChange={handleFirstNameChange}
            defaultValue={email}
            className='w-50'
          />
          <FormFeedback>{inputErrTxt}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col>
              <Button
                className='btn btn-danger'
                onClick={() => setStatus({ changePassword: false, editProfile: false })}
              >
                Cancel
              </Button>
              <Button
                className='btn btn-success ml-3'
              // onC/lick={() => setStatus({ changePassword: false, editProfile: false })}
              >
                Edit
              </Button>
            </Col>
          </Row>
        </FormGroup>
      </div>
    );
  };

  const renderChangePasswordForm = () => {
    return (
      <div>
        <br />
        <br />
        <Label>
          <h3>Change Password</h3>
        </Label>
        <FormGroup>
          <Label>
            <h6>Current Password</h6>
          </Label>
          <Input
            type='password'
            invalid={inputErrTxt !== ''}
            onChange={handleFirstNameChange}
            placeholder='Input'
            className='w-50'
          />
          <FormFeedback>{inputErrTxt}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>
            <h6>New Password</h6>
          </Label>
          <Input
            type='text'
            invalid={inputErrTxt !== ''}
            onChange={handleFirstNameChange}
            placeholder='Input'
            className='w-50'
          />
          <FormFeedback>{inputErrTxt}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>
            <h6>Confirm Password</h6>
          </Label>
          <Input
            type='text'
            invalid={inputErrTxt !== ''}
            onChange={handleFirstNameChange}
            placeholder='Input'
            className='w-50'
          />
          <FormFeedback>{inputErrTxt}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col>
              <Button
                className='btn btn-danger'
                onClick={() => setStatus({ changePassword: false, editProfile: false })}
              >
                Cancel
              </Button>
              <Button
                className='btn btn-success ml-3'
              // onClick={() => setStatus({ changePassword: false, editProfile: false })}
              >
                Change Password
              </Button>
            </Col>
          </Row>
        </FormGroup>
      </div>
    );
  };

  return (
    <Container fluid>
      <Row className='justify-content-center mt-5'>
        <Card className='w-75 border-0 shadow'>
          <CardHeader className='bg-dark text-white h4'>
            User ID: {id}
          </CardHeader>
          <CardBody>
            <Table className='h4'>
              <Row>
                <Col className='col-3'>First Name</Col>
                <Col>: {first_name}</Col>
              </Row>
              <br />
              <Row>
                <Col className='col-3'>Last Name</Col>
                <Col>: {last_name}</Col>
              </Row>
              <br />
              <Row>
                <Col className='col-3'>Email</Col>
                <Col>: {email}</Col>
              </Row>
              <br />
            </Table>
            <Row>
              <Col>
                <Button
                  className='btn btn-secondary'
                  onClick={() => setStatus({ changePassword: false, editProfile: true })}
                >
                  Edit Profile
                </Button>
                <Button
                  className='btn btn-secondary ml-3'
                  onClick={() => setStatus({ changePassword: true, editProfile: false })}
                >
                  Change Password
                </Button>
              </Col>
            </Row>
            {status.changePassword && (
              renderChangePasswordForm()
            )}
            {status.editProfile && (
              renderEditProfileForm()
            )}
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
};
UserProfileComponent.propTypes = {
  profileDetails: PropTypes.objectOf(PropTypes.object).isRequired,
  inputErrTxt: PropTypes.string.isRequired,
  outputErrTxt: PropTypes.string.isRequired,
  handleEmailChange: PropTypes.string.isRequired,
  handleFirstNameChange: PropTypes.string.isRequired,
  handleLastNameChange: PropTypes.string.isRequired,
};

export default React.memo(UserProfileComponent);
