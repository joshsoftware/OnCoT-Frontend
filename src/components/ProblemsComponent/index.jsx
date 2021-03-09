import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'core-components';
import './problemStyle.css';

const ProblemComponent = (props) => {
  const { data } = props;

  return (
    <Container fluid className='problemBody p-5'>
      <h4 className='text-center text-white font-weight-bold mb-3'>Problem Statement</h4>
      <h6 className='text-white font-weight-light'>{data}</h6>
    </Container>
  );
};

ProblemComponent.propTypes = {
  data: PropTypes.string.isRequired,
};

export default React.memo(ProblemComponent);
