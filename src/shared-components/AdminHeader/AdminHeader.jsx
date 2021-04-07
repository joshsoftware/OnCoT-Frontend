import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { Col, Navbar, NavbarBrand, Button, Container } from 'core-components';

const AdminHeader = (props) => {
  const reducer = useSelector((state) => state.adminHomeComponentReducer);
  const dispatch = useDispatch();
  const { organisationName, adminName } = props;
  return (
    <Container fluid className='p-0'>
      <Navbar
        className='bg-dark justify-content-around custom-height'
        md={12}
        xl={12}
        lg={12}
      >
        <NavbarBrand
          className='mx-5 text-white font-weight-bold'
          onClick={() => {
            dispatch({ type: 'HOME', payload: 'HOME' });
          }}
        >
          <h3 className='font-weight-bold'>{organisationName}</h3>
        </NavbarBrand>
        <Col className='mx-5 d-flex justify-content-end'>
          <h3 className='text-success align-middle mr-5 font-weight-bold'>
            OnCOT
          </h3>
        </Col>
        <Col className='justify-content-end d-flex module mx-0'>
          <h3 className='text-white'>{adminName}</h3>
        </Col>
      </Navbar>
    </Container>
  );
};

AdminHeader.propTypes = {
  organisationName: PropTypes.string.isRequired,
  adminName: PropTypes.string.isRequired,
};

export default React.memo(AdminHeader);
