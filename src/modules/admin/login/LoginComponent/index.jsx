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
} from 'core-components/index';
import josh from 'assets/images/josh.png';
import siteLogo from 'assets/images/spark-code-logo.png';
// import './adminLoginStyle.css';
import LoginCard from './LoginCard/loginCard';
import './loginLayout.scss';

const LoginComponent = (props) => {
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
    // <Container fluid className='admin-login-height'>
    //   <Row>
    //     <Col
    //       className='admin-login-left d-flex align-items-center justify-content-center'
    //       md={7}
    //       xl={7}
    //       lg={7}
    //       sm={12}
    //     >
    //       <div className='bg-white p-5 shadow'>
    //         <div className='bg-white mb-2 p-0 border-bottom'>
    //           <h6 className='title-css'>OnCoT Admin</h6>
    //         </div>
    //         <img
    //           src={josh}
    //           alt='Josh Logo'
    //           className='mt-2'
    //           height={100}
    //           width={500}
    //         />
    //       </div>
    //     </Col>
    //     <Col
    //       className='admin-login-right d-flex align-items-center justify-content-center'
    //       md={5}
    //       xl={5}
    //       lg={5}
    //       sm={12}
    //     >
    //       <Row className='p-0 border-0 text-white'>
    //         <Form className='align-self-center'>
    //           <div className='border-dark border-bottom p-3'>
    //             <h2 className='text-center textColor font-weight-bolder'>
    //               Login1234
    //             </h2>
    //           </div>
    //           <FormGroup className='mt-4'>
    //             <Label className='text-left textColor'>Email</Label>
    //             <Input
    //               className='shadow'
    //               id='exampleEmail'
    //               type='email'
    //               placeholder='example@gmail.com'
    //               value={email}
    //               onChange={handleEmailChange}
    //               invalid={emailError !== ''}
    //             />
    //             <FormFeedback type='invalid' target='exampleEmail'>
    //               {emailError}
    //             </FormFeedback>
    //           </FormGroup>
    //           <FormGroup>
    //             <Label className='text-left textColor'>Password</Label>
    //             <Input
    //               type='password'
    //               className='shadow'
    //               id='examplePassword'
    //               placeholder='******'
    //               value={password}
    //               onChange={handlePasswordChange}
    //               invalid={passwordError !== ''}
    //             />
    //             <FormFeedback type='invalid' target='examplePassword'>
    //               {passwordError}
    //             </FormFeedback>
    //           </FormGroup>
    //           <FormGroup className='mt-5 d-flex justify-content-center'>
    //             <Button
    //               className='bg-dark w-75 border-0'
    //               onClick={handleSubmit}
    //             >
    //               {isLoading ? <Spinner size='sm' color='light' /> : <>Login</>}
    //             </Button>
    //           </FormGroup>
    //           {invalidUser()}
    //         </Form>
    //       </Row>
    //     </Col>
    //   </Row>
    // </Container>
    <section className='login-section'>
      <div className='login-wrapper position-relative h-100'>
        <div className='spark-code-header py-4'>
          <div className='container'>
            <a href='#' className='d-block'>
              <img className='site-logo' src={siteLogo} alt='Spark Code Logo' />
            </a>
          </div>
        </div>
        <LoginCard />
      </div>
    </section>
  );
};

LoginComponent.propTypes = {
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

export default React.memo(LoginComponent);
