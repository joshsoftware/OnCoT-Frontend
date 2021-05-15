import PropTypes from 'prop-types';
import React, { Component, useState } from 'react';

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
    passwordErrTxt,
    currentPasswordErrTxt,
    passwordConfirmationErrTxt,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleCurrentPasswordChange,
    handleConfirmPasswordChange,
    handleOnClickEdit,
    handleOnClickChangePassword,
    status,
    setStatus,
    firstNameErrTxt,
    lastNameErrTxt,
    emailErrTxt,
    handleEditCancelClick,
    handleChangePasswordCancel,
  } = props;
  const { first_name, last_name, email, id } = profileDetails;

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
            invalid={firstNameErrTxt !== ''}
            onChange={handleFirstNameChange}
            defaultValue={first_name}
            className='w-50'
            required
          />
          <FormFeedback>{firstNameErrTxt}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>
            <h6>Last Name</h6>
          </Label>
          <Input
            type='text'
            invalid={lastNameErrTxt !== ''}
            onChange={handleLastNameChange}
            defaultValue={last_name}
            className='w-50'
            required
          />
          <FormFeedback>{lastNameErrTxt}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>
            <h6>Email</h6>
          </Label>
          <Input
            type='text'
            invalid={emailErrTxt !== ''}
            onChange={handleEmailChange}
            defaultValue={email}
            className='w-50'
            required
          />
          <FormFeedback>{emailErrTxt}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col>
              <Button
                className='btn btn-danger'
                onClick={handleEditCancelClick}
              >
                Cancel
              </Button>
              <Button
                className='btn btn-success ml-3'
                onClick={handleOnClickEdit}
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
            invalid={currentPasswordErrTxt !== ''}
            onChange={handleCurrentPasswordChange}
            placeholder='Current password'
            className='w-50'
            required
          />
          <FormFeedback>{currentPasswordErrTxt}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>
            <h6>New Password</h6>
          </Label>
          <Input
            type='password'
            invalid={passwordErrTxt !== ''}
            onChange={handlePasswordChange}
            placeholder='Password'
            className='w-50'
            required
          />
          <FormFeedback>{passwordErrTxt}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>
            <h6>Password Confirmation</h6>
          </Label>
          <Input
            type='password'
            invalid={passwordConfirmationErrTxt !== ''}
            onChange={handleConfirmPasswordChange}
            placeholder='Confirm password'
            className='w-50'
            required
          />
          <FormFeedback>{passwordConfirmationErrTxt}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col>
              <Button
                className='btn btn-danger'
                onClick={handleChangePasswordCancel}
              >
                Cancel
              </Button>
              <Button
                className='btn btn-success ml-3'
                onClick={handleOnClickChangePassword}
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
  passwordErrTxt: PropTypes.string.isRequired,
  currentPasswordErrTxt: PropTypes.string.isRequired,
  passwordConfirmationErrTxt: PropTypes.string.isRequired,
  handleEmailChange: PropTypes.string.isRequired,
  handleFirstNameChange: PropTypes.string.isRequired,
  handleLastNameChange: PropTypes.string.isRequired,
  handleConfirmPasswordChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleCurrentPasswordChange: PropTypes.func.isRequired,
  handleOnClickEdit: PropTypes.func.isRequired,
  handleOnClickChangePassword: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  setStatus: PropTypes.func.isRequired,
  firstNameErrTxt: PropTypes.string.isRequired,
  lastNameErrTxt: PropTypes.string.isRequired,
  emailErrTxt: PropTypes.string.isRequired,
  handleEditCancelClick: PropTypes.func.isRequired,
  handleChangePasswordCancel: PropTypes.func.isRequired,
};

export default React.memo(UserProfileComponent);
