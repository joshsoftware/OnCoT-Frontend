import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'core-components';

import './problemStyle.css';

const ProblemComponent = ({ data }) => {
  return (
    <Container fluid className='problemBody border border-dark'>
      <h5 className='text-center text-white text-success font-weight-bold pt-1'>
        Problem Statement
      </h5>
      <div className='pl-2'>
        <h6 className='text-white scrollable font-weight-light'>{data}</h6>
      </div>
    </Container>
  );
};

ProblemComponent.propTypes = {
  data: PropTypes.string.isRequired,
};

export default React.memo(ProblemComponent);
