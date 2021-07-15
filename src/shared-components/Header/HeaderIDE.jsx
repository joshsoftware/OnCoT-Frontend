import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { Col, Navbar, NavbarBrand, Button, Container } from 'core-components';
import WebcamCapture from 'shared-components/Header/Webcam/WebcamCapture';
import './HeaderIDE.css';

const HeaderIDE = (props) => {
  const {
    organisationName,
    currentProblem,
    totalProblems,
    time,
    ifSufficient,
    nextProblemSwitch,
    prevProblemSwitch,
  } = props;

  return (
    <Container fluid className='p-0'>
      <Navbar className='bg-dark justify-content-around min-vh-10'>
        <NavbarBrand className='mx-5 text-white font-weight-bold'>
          <h3 className='font-weight-bold'>{organisationName}</h3>
        </NavbarBrand>
        <Col className='mx-5 d-flex justify-content-end'>
          <h3 className='text-success align-middle mr-5 font-weight-bold'>
            OnCOT
          </h3>
        </Col>

        <WebcamCapture />
        <Col className='justify-content-end d-flex module mx-0'>
          <Button disabled={currentProblem <= 1} onClick={prevProblemSwitch} className='pt-2 custom-circle btn-circle font-weight-bold'>
            {'<'}
          </Button>
          <h6 className='text-white text-center mt-2 mx-2 custom-font-size'>
            Problem {currentProblem}/{totalProblems}
          </h6>
          <Button disabled={currentProblem >= totalProblems} onClick={nextProblemSwitch} className='pt-2 custom-circle btn-circle font-weight-bold'>
            {'>'}
          </Button>
        </Col>
        <Col lg={2} className='justify-content-end d-flex'>
          <h2
            className={
              ifSufficient
                ? 'text-white align-middle font-weight-bold'
                : 'text-danger align-middle font-weight-bold'
            }
            id='timeLeft'
          >
            {time}
          </h2>
        </Col>
      </Navbar>
    </Container>
  );
};

HeaderIDE.propTypes = {
  organisationName: PropTypes.string.isRequired,
  currentProblem: PropTypes.number.isRequired,
  totalProblems: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  ifSufficient: PropTypes.bool.isRequired,
  nextProblemSwitch: PropTypes.func.isRequired,
  prevProblemSwitch: PropTypes.func.isRequired,
};

export default React.memo(HeaderIDE);
