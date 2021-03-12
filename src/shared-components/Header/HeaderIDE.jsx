import React from 'react';
import PropTypes from 'prop-types';

import { Col, Navbar, NavbarBrand, Button } from 'core-components';

import './HeaderIDE.css';

const HeaderIDE = (props) => {
  const {
    organisationName,
    currentProblem,
    totalProblems,
    time,
    ifSufficient,
  } = props;

  return (
    <Navbar
      className='bg-dark justify-content-around custom-height'
      md={12}
      xl={12}
      lg={12}
    >
      <NavbarBrand className='mx-5 text-white font-weight-bold'>
        <h3 className='font-weight-bold'>{organisationName}</h3>
      </NavbarBrand>
      <Col className='mx-5 d-flex justify-content-end mr-5'>
        <h3 className='text-success align-middle mr-5 font-weight-bold'>
          OnCOT
        </h3>
      </Col>
      <Col className='mx-5 justify-content-end d-flex'>
        <div className='mx-5 justify-content-end d-flex module'>
          <Button className='p-2 custom-circle btn-circle'>{'<'}</Button>
          <h6 className='text-white text-center mt-2 mx-3 custom-font-size'>
            Problem {currentProblem}/{totalProblems}
          </h6>
          <Button className='p-2 custom-circle btn-circle'>{'>'}</Button>
        </div>
        <h2
          className={
            ifSufficient
              ? 'text-white align-middle font-weight-bold'
              : 'text-danger align-middle font-weight-bold'
          }
          id='timeLeft'
        >
          {time}
        </h2>
      </Col>
    </Navbar>
  );
};

HeaderIDE.propTypes = {
  organisationName: PropTypes.string.isRequired,
  currentProblem: PropTypes.number.isRequired,
  totalProblems: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  ifSufficient: PropTypes.bool.isRequired,
};

export default React.memo(HeaderIDE);
