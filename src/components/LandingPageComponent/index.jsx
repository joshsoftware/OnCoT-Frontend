import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { Button, Alert, Container } from 'core-components';
import { DATE_TIME_FORMAT } from 'constants/appConstants';

import './landingPage.css';

function LandingPageComponent(props) {
  const {
    startTime,
    isError,
    errorMessage,
    isLoading,
    handleClick,
    driveTime,
  } = props;
  const expired = 'Expired';
  if (isLoading) {
    return (
      <div className='overview-block text-center text-white'>
        <Alert color='success'> Loading</Alert>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='overview-block text-center text-white'>
        <Alert color='danger'>{errorMessage}</Alert>
      </div>
    );
  }

  return (
    <Container fluid className='dark-l'>
      <div className='custom-padding text-center text-white'>
        <h3>Welcome to</h3>
        <h1 className='font-weight-bolder title-color'>OnCoT</h1>
        <h4 className='my-5'>
          {`Your test will start on ${moment(startTime).format(DATE_TIME_FORMAT)}`}
        </h4>
        <h3 className='text-success'>
          {driveTime === expired ? null : driveTime}
        </h3>
        {driveTime === expired && (
          <Button
            className='px-5 custom-color btn-style'
            size='lg'
            onClick={handleClick}
          >
            Start Test
          </Button>
        )}
      </div>
    </Container>
  );
}

LandingPageComponent.propTypes = {
  startTime: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  driveTime: PropTypes.string.isRequired,
};

export default React.memo(LandingPageComponent);
