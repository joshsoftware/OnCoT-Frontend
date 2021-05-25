import PropTypes from 'prop-types';
import React from 'react';

import {
  Spinner,
  Row,
  Col,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Button,
} from 'core-components';

const EditProfileComponent = (props) => {
  const {
    profileDetails,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handleOnClickEdit,
    firstNameErrTxt,
    lastNameErrTxt,
    emailErrTxt,
    handleEditCancelClick,
  } = props;
  const { first_name, last_name, email } = profileDetails;

  if (typeof email === 'undefined') {
    return <Spinner />;
  }

  return (
    (
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
    )
  );
};
EditProfileComponent.propTypes = {
  profileDetails: PropTypes.objectOf(PropTypes.object).isRequired,
  handleEmailChange: PropTypes.string.isRequired,
  handleFirstNameChange: PropTypes.string.isRequired,
  handleLastNameChange: PropTypes.string.isRequired,
  handleOnClickEdit: PropTypes.func.isRequired,
  firstNameErrTxt: PropTypes.string.isRequired,
  lastNameErrTxt: PropTypes.string.isRequired,
  emailErrTxt: PropTypes.string.isRequired,
  handleEditCancelClick: PropTypes.func.isRequired,
};

export default React.memo(EditProfileComponent);
