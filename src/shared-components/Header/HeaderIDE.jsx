import React from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import axios from 'axios';

import { Col, Navbar, NavbarBrand, Button, Container } from 'core-components';

import './HeaderIDE.css';

const HeaderIDE = (props) => {
  const {
    organisationName,
    currentProblem,
    totalProblems,
    time,
    ifSufficient,
  } = props;

  const videoConstraints = {
    width: 128,
    height: 128,
    facingMode: 'user',
  };
  const mockServer = 'https://6081361c73292b0017cdcf5f.mockapi.io/captures/';

  let id = 1;
  const WebcamCapture = () => {
    const webcamRef = React.useRef(null);

    setInterval(
      React.useCallback(() => {
        if (webcamRef.current != null) {
          console.log(webcamRef);
          const imageSrc = webcamRef.current.getScreenshot();
          console.log(imageSrc);
          const data = {
            id,
            base64: imageSrc,
          };

          axios.post(mockServer + id, data);
          id += 1;
        }
      }, [webcamRef]),
      5000,
    );
    return (
      <>
        <Webcam
          audio={false}
          height={80}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          width={80}
          videoConstraints={videoConstraints}
        />
      </>
    );
  };

  return (
    <Container fluid className='p-0'>
      <Navbar
        className='bg-dark justify-content-around custom-height'
        md={12}
        xl={12}
        lg={12}
      >
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
          <Button className='pt-2 custom-circle btn-circle font-weight-bold'>
            {'<'}
          </Button>
          <h6 className='text-white text-center mt-2 mx-2 custom-font-size'>
            Problem {currentProblem}/{totalProblems}
          </h6>
          <Button className='pt-2 custom-circle btn-circle font-weight-bold'>
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
};

export default React.memo(HeaderIDE);
