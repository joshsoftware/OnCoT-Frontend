import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Spinner,
  Toast,
} from 'core-components/index';
import { Link } from 'react-router-dom';
import './loginCard.scss';

const LoginCard = (props) => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    emailError,
    passwordError,
    email,
    password,
    isError,
    isLoading,
    errorMessage,
  } = props;

  const invalidUser = () => {
    if (isError) {
      return (
        <Toast className='bg-transparent p-2 border-0 shadow-0 text-center'>
          <p>Invalid Credentials</p>
        </Toast>
      );
    }
  };

  return (
    <div className='login-card-box position-absolute'>
      <h2 className='font-weight-normal'>Welcome to SparKode</h2>
      <Form className='login-form d-flex flex-column h-100 scroll-y'>
        <FormGroup>
          <Label className='mx-3 font-weight-normal'>Email</Label>
          <Input
            id='exampleEmail'
            type='email'
            placeholder='example@gmail.com'
            value={email}
            onChange={handleEmailChange}
            invalid={emailError !== ''}
          />
          <FormFeedback type='invalid' target='exampleEmail'>
            {emailError}
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label className='mx-3 font-weight-normal'>Password</Label>
          <Input
            type='password'
            id='examplePassword'
            placeholder='******'
            value={password}
            onChange={handlePasswordChange}
            invalid={passwordError !== ''}
          />
          <FormFeedback type='invalid' target='examplePassword'>
            {passwordError}
          </FormFeedback>
        </FormGroup>
        <div className='login-details-box d-flex justify-content-between align-items-center pt-2 pb-1'>
          <Link to='/' className='forgot-password-link text-decoration-none'>
            Forgot Password
          </Link>
          <FormGroup check>
            <Label
              for='exampleCheck'
              check
              className='font-weight-normal d-flex align-items-center'
            >
              <Input
                type='checkbox'
                name='check'
                id='exampleCheck'
                className='form-check-input-sm mt-0'
              />
              <span className='ml-2'>Remember Me</span>
            </Label>
          </FormGroup>
        </div>
        <FormGroup className='d-flex mb-0 py-5'>
          <Button
            className='border-0 w-100'
            onClick={handleSubmit}
            color='primary'
          >
            {isLoading ? <Spinner size='sm' color='light' /> : <>Login</>}
          </Button>
        </FormGroup>
        {invalidUser()}
      </Form>
    </div>
  );
};

LoginCard.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  emailError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default React.memo(LoginCard);
