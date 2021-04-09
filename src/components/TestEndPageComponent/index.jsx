import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'core-components';
import Loading from 'shared-components/Loading';

import './endPage.css';

function TestEndPageComponent({ isLoading }) {
  const loading = () => {
    if (isLoading) {
      return (
        <Loading />
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
      </div>
    </Container>
  );
}
TestEndPageComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default React.memo(TestEndPageComponent);
