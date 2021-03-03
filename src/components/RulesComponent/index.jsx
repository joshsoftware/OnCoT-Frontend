import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'core-components';

import './ruleStyle.css';

const RulesComponent = (props) => {
  const { data } = props;
  return (
    <Container className='green p-5 overflow-auto'>
      <h4 className='text-center text-white font-weight-bold mb-3'>Rules</h4>
      <h6 className='text-white font-weight-light'>{data}</h6>
    </Container>
  );
};

RulesComponent.propTypes = {
  data: PropTypes.string.isRequired,
};

export default React.memo(RulesComponent);
