import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'core-components';
import Loading from 'shared-components/Loading';

import './problemStyle.css';

const ProblemComponent = ({ isError, errorMessage, title, description, isLoading }) => {
  const loading = () => {
    if (isLoading) {
      return (
        <Loading />
      );
    }
  };
  if (isError) {
    return (
      <Container fluid className='problemBody p-2 border-bottom border-dark'>
        <h5 className='text-center text-green font-weight-bold mb-3'>
          Problem Statement
        </h5>
        <div className='py-2 p-2 border-top border-dark'>
          <h6 className='pl-2 text-white scrollable font-weight-light'>
            {errorMessage}
          </h6>
        </div>
      </Container>
    );
  }
  return (
    <Container fluid className='problemBody p-2 border-bottom border-dark'>
      <h5 className='text-center font-weight-bold mb-3 text-green'>
        {title}
      </h5>
      <div className='py-2 p-2 border-top border-dark'>
        <h6 className='pl-2 text-white scrollable font-weight-light'>
          {loading()}
          <p className='text-newline'>{description}</p>
        </h6>
      </div>
    </Container>
  );
};

ProblemComponent.propTypes = {
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default React.memo(ProblemComponent);
