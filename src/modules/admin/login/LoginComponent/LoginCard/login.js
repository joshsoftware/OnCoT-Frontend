import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Spinner,
  Toast,
} from 'core-components/index';
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
      <Form className='d-flex align-items-center justify-content-center flex-column h-100'>
        <FormGroup>
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
        <FormGroup className='mt-5 d-flex justify-content-center'>
          <Button className='border-0' onClick={handleSubmit}>
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
