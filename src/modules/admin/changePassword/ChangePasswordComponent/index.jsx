import PropTypes from 'prop-types';
import React from 'react';

import {
  Row,
  Col,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Button,
} from 'core-components';

const ChangePasswordComponent = (props) => {
  const {
    passwordErrTxt,
    currentPasswordErrTxt,
    passwordConfirmationErrTxt,
    handlePasswordChange,
    handleCurrentPasswordChange,
    handleConfirmPasswordChange,
    handleOnClickChangePassword,
    handleChangePasswordCancel,
  } = props;

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
ChangePasswordComponent.propTypes = {
  passwordErrTxt: PropTypes.string.isRequired,
  currentPasswordErrTxt: PropTypes.string.isRequired,
  passwordConfirmationErrTxt: PropTypes.string.isRequired,
  handleConfirmPasswordChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleCurrentPasswordChange: PropTypes.func.isRequired,
  handleOnClickChangePassword: PropTypes.func.isRequired,
  handleChangePasswordCancel: PropTypes.func.isRequired,
};

export default React.memo(ChangePasswordComponent);
