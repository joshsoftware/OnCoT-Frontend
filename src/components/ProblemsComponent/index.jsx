import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'core-components';
import './problemStyle.css';

const ProblemComponent = (props) => {
  const { data } = props;

  return (
    <Container fluid className='problemBody'>
      <h4 className='text-center text-white font-weight-bold mb-3'>Problem Statement</h4>
      <div className='py-2'>
        <h6 className='text-white scrollable font-weight-light'>{data}</h6>
      </div>
    </Container>
  );
};

ProblemComponent.propTypes = {
  data: PropTypes.string.isRequired,
};

export default React.memo(ProblemComponent);
