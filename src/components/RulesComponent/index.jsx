import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'core-components';

import './ruleStyle.css';

const RulesComponent = ({ isError, errorMessage, description }) => {
  if (isError) {
    return (
      <Container className='green p-5 overflow-auto'>
        <h4 className='text-center text-white font-weight-bold mb-3'>Rules</h4>
        <h6 className='text-white font-weight-light'>{errorMessage}</h6>
      </Container>
    );
  }
  return (
    <Container className='green p-5 overflow-auto'>
      <h4 className='text-center text-white font-weight-bold mb-3'>Rules</h4>
      <h6 className='text-white font-weight-light'>{description}</h6>
    </Container>
  );
};
RulesComponent.propTypes = {
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default React.memo(RulesComponent);
