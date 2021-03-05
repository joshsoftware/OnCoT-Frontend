import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Card,
  CardBody,
  Row,
  Col,
  Toast,
  ToastHeader,
  Label,
  Spinner,
  Container,
} from 'core-components/index';

import './infoComponent.css';

const UserProfileComponent = (props) => {
  const {
    handleFirstNameChange,
    handleLastNameChange,
    handleMobileChange,
    handleSubmit,
    firstNameIsValid,
    lastNameIsValid,
    mobileIsValid,
    result,
    toggle,
    showToast,
  } = props;

  return (
    <Container fluid className='box'>
      <Card className='formCard bg-transparent border-5'>
        <CardBody className='text-white'>
          <h2 className='pb-3 text-success text-center font-weight-bolder'>
            OnCot
          </h2>
          <h5 className='pb-3 text-center font-weight-bolder'>
            Please fill below details
          </h5>

          <Form>
            <Row className='py-3'>
              <Col>
                <FormGroup>
                  <Input
                    className='shadow'
                    onChange={handleFirstNameChange}
                    invalid={!firstNameIsValid.valid}
                    placeholder=''
                  />

                  <Label className='text-left'>First Name</Label>

                  <FormFeedback className='text-center'>
                    {firstNameIsValid.message}
                  </FormFeedback>
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Input
                    className='shadow'
                    onChange={handleLastNameChange}
                    invalid={!lastNameIsValid.valid}
                    placeholder=''
                  />

                  <Label className='text-left'>Last Name</Label>

                  <FormFeedback className='text-center'>
                    {lastNameIsValid.message}
                  </FormFeedback>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col>
                <FormGroup>
                  <Input
                    className='shadow'
                    onChange={handleMobileChange}
                    invalid={!mobileIsValid.valid}
                    placeholder=''
                  />

                  <Label className='text-left'>Mobile</Label>

                  <FormFeedback className='text-center'>
                    {mobileIsValid.message}
                  </FormFeedback>
                </FormGroup>
              </Col>
            </Row>

            <Row className='py-3 text-center'>
              <Col>
                <FormGroup>
                  <Button
                    className='shadow w-75 mt-2 font-weight-bolder'
                    color='success'
                    type='submit'
                    onClick={handleSubmit}
                  >
                    {result.loading ? (
                      <Spinner size='sm' color='light' />
                    ) : (
                      <>Continue</>
                    )}
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>

      {showToast ? (
        <div className='errorToast'>
          <Toast isOpen={showToast}>
            <ToastHeader className='w-100 px-4' icon='danger' toggle={toggle}>
              The server encountered an error.
              <br />
              Please try again later.
            </ToastHeader>
          </Toast>
        </div>
      ) : null}
    </Container>
  );
};

UserProfileComponent.propTypes = {
  handleFirstNameChange: PropTypes.func.isRequired,
  handleLastNameChange: PropTypes.func.isRequired,
  handleMobileChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,

  firstNameIsValid: PropTypes.objectOf(PropTypes.object).isRequired,
  lastNameIsValid: PropTypes.objectOf(PropTypes.object).isRequired,
  mobileIsValid: PropTypes.objectOf(PropTypes.object).isRequired,

  result: PropTypes.objectOf(PropTypes.object).isRequired,
  showToast: PropTypes.bool.isRequired,
};

export default React.memo(UserProfileComponent);
