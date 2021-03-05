import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { Button, Alert, Container } from 'core-components';
import Loading from 'shared-components/Loading';
import './style.css';

function LandingPageComponent(props) {
  const { startTime, isError, errorMessage, isLoading, handleClick } = props;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className='overview-block text-center text-white'>
        <Alert color='danger'>{errorMessage}</Alert>
      </div>
    );
  }

  return (
    <Container fluid className='dark'>
      <div className='custom-padding text-center text-white'>
        <h3>Welcome to</h3>
        <h1 className='font-weight-bolder' id='title'>
          OnCoT
        </h1>
        <h4 className='my-5'>
          {`Your test will start on ${moment(startTime).format('LLL')}`}
        </h4>
        <div>
          <Button className='px-5' size='lg' onClick={handleClick}>
            Continue
          </Button>
        </div>
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
};

export default React.memo(LandingPageComponent);
