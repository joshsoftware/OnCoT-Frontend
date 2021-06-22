import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Row,
  Col,
  Label,
  Spinner,
  Container,
  Toast,
} from 'core-components';
import josh from 'assets/images/josh.png';
import './adminLoginStyle.css';

const AcceptInvitationComponent = (props) => {
  const {
    handleFirstNameChange,
    handleLastNameChange,
    handleMobileNumberChange,
    handlePasswordConfirmationChange,
    handlePasswordChange,
    handleSubmit,
    signUpState,
    isError,
    isLoading,
    errorMessage,
  } = props;

  const { firstName, lastName, mobileNumber, email, password, passwordConfirmation,
    firstNameError, lastNameError, mobileNumberError, emailError, passwordError,
    passwordConfirmationError } = signUpState;

  const invalidUser = () => {
    if (isError) {
      return (
        <Toast className='bg-transparent p-2 border-0 shadow-0 text-center'>
          <p>{errorMessage}</p>
          <p>Unauthorized User</p>
        </Toast>
      );
    }
  };

  return (
    <Container fluid className='admin-login-height'>
      <Row>
        <Col
          className='admin-login-left d-flex align-items-center justify-content-center'
          md={7}
          xl={7}
          lg={7}
          sm={12}
        >
          <div className='bg-white p-5 shadow'>
            <div className='bg-white mb-2 p-0 border-bottom'>
              <h6 className='title-css'>OnCoT SignUp</h6>
            </div>
            <img
              src={josh}
              alt='Josh Logo'
              className='mt-2'
              height={100}
              width={500}
            />
          </div>
        </Col>

        <Col
          className='admin-login-right d-flex align-items-center justify-content-center'
          md={5}
          xl={5}
          lg={5}
          sm={12}
        >
          <Row className='p-0 border-0 text-white'>
            <Form className='align-self-center'>
              <div className='border-dark border-bottom p-3'>
                <h2 className='text-center textColor font-weight-bolder'>
                  Create Account
                </h2>
              </div>
              <FormGroup className='mt-4'>
                <Input
                  className='shadow'
                  id='exampleFirstName'
                  type='text'
                  placeholder='First Name'
                  onChange={handleFirstNameChange}
                  invalid={firstNameError !== ''}
                />
                <FormFeedback type='invalid' target='exampleFirstName'>
                  {firstNameError}
                </FormFeedback>
              </FormGroup>
              <FormGroup className='mt-4'>
                <Input
                  className='shadow'
                  id='exampleLastName'
                  type='text'
                  placeholder='Last Name'
                  onChange={handleLastNameChange}
                  invalid={lastNameError !== ''}
                />
                <FormFeedback type='invalid' target='exampleLastName'>
                  {lastNameError}
                </FormFeedback>
              </FormGroup>
              <FormGroup className='mt-4'>
                <Input
                  className='shadow'
                  id='exampleMobileNumber'
                  type='number'
                  placeholder='Mobile Number'
                  onChange={handleMobileNumberChange}
                  invalid={mobileNumberError !== ''}
                />
                <FormFeedback type='invalid' target='exampleMobileNumber'>
                  {mobileNumberError}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input
                  type='password'
                  className='shadow'
                  id='examplePassword'
                  placeholder='Password'
                  onChange={handlePasswordChange}
                  invalid={passwordError !== ''}
                />
                <FormFeedback type='invalid' target='examplePassword'>
                  {passwordError}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input
                  type='password'
                  className='shadow'
                  id='examplePassword'
                  placeholder='Confirm Password'
                  onChange={handlePasswordConfirmationChange}
                  invalid={passwordConfirmationError !== ''}
                />
                <FormFeedback type='invalid' target='examplePassword'>
                  {passwordConfirmationError}
                </FormFeedback>
              </FormGroup>
              <FormGroup className='mt-5 d-flex justify-content-center'>
                <Button
                  className='bg-dark w-75 border-0'
                  onClick={handleSubmit}
                >
                  {isLoading ? <Spinner size='sm' color='light' /> : <>Signup</>}
                </Button>
              </FormGroup>
              {invalidUser()}
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

AcceptInvitationComponent.propTypes = {
  handleFirstNameChange: PropTypes.func.isRequired,
  handleLastNameChange: PropTypes.func.isRequired,
  handleMobileNumberChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handlePasswordConfirmationChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signUpState: PropTypes.objectOf(PropTypes.any).isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,

};

export default React.memo(AcceptInvitationComponent);
