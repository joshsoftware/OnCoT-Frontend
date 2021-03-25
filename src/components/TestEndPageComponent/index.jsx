import React from 'react';
import PropTypes from 'prop-types';

import { Container, Spinner } from 'core-components';

import './endPage.css';

function TestEndPageComponent({ score, isLoading }) {
  const loading = () => {
    if (isLoading) {
      return (
        <div className='overview-block d-flex text-center justify-content-center text-white '>
          <Spinner size='sm' />
        </div>
      );
    }
  };
  return (
    <Container fluid className='dark'>
      <div className='custom-padding text-center text-white'>
        <h3>Thank you!</h3>
        <h3 className='font-weight-bolder title-color'>
          Test Completed!
        </h3>
        <h3>Your Test Score is: {loading()}{score}</h3>
      </div>
    </Container>
  );
}
TestEndPageComponent.propTypes = {
  score: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default React.memo(TestEndPageComponent);
