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
import React from 'react';

const LoginComponent = (props) => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    emailError,
    passwordError,
  } = props;
  return (
    <Container className='name' fluid>
      <Row className='name pb-5'>
        <Col className='pb-5 bg-success' xl={7} lg={7}>
          Image
        </Col>

        <Col className='pb-5 bg-dark' xl={5} lg={5}>
          <Card className='bg-transparent'>
            <CardBody className='text-white'>
              <h2 className='mt-5 text-success text-center font-weight-bolder'>
                Login
              </h2>

              <Form className='pd-5 px-5'>
                <Row className='d-flex justify-content-center pt-5 px-5'>
                  <FormGroup className='w-50'>
                    <Label className='text-left'>Email</Label>
                    <Input
                      className='shadow'
                      type='email'
                      placeholder=''
                      onChange={handleEmailChange}
                      invalid={emailError !== ''}
                    />
                    <FormFeedback>{emailError}</FormFeedback>
                  </FormGroup>
                </Row>
                <Row className='d-flex justify-content-center pt-5 px-5'>
                  <FormGroup className='w-50'>
                    <Label className='text-left'>Password</Label>
                    <Input
                      type='password'
                      className='shadow'
                      placeholder=''
                      onChange={handlePasswordChange}
                      invalid={passwordError !== ''}
                    />
                    <FormFeedback>{passwordError}</FormFeedback>
                  </FormGroup>
                </Row>
                <Row className='d-flex justify-content-center py-5 px-5'>
                  <FormGroup className='w-50 d-flex justify-content-center'>
                    <Button onClick={handleSubmit}>Login</Button>
                  </FormGroup>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

LoginComponent.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  emailError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
};

export default React.memo(LoginComponent);
