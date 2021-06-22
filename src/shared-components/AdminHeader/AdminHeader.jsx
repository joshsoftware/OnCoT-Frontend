import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { Col, Navbar, NavbarBrand, Button, Container } from 'core-components';

const AdminHeader = (props) => {
  const reducer = useSelector((state) => state.adminHomeComponentReducer);
  const dispatch = useDispatch();
  const { organisationName, adminName, handleLogout, handleProfileClick } = props;
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
          <div className='dropdown'>
            <button
              className='btn btn-secondary dropdown-toggle'
              type='button'
              id='dropdownMenuButton'
              data-toggle='dropdown'
              aria-haspopup='true'
            >
              {adminName}
            </button>
            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton' style={{ zIndex: 2 }}>
              <a
                role='button'
                className='dropdown-item'
                onClick={handleProfileClick}
                tabIndex={0}
                onKeyDown={handleProfileClick}
              >
                Profile
              </a>
              <a
                role='button'
                className='dropdown-item'
                onClick={() => window.confirm('Do you want to logout?') && handleLogout()}
                tabIndex={0}
                onKeyDown={() => window.confirm('Do you want to logout?') && handleLogout()}
              >
                Logout
              </a>
            </div>
          </div>
        </Col>
      </Navbar>
    </Container>
  );
};

AdminHeader.propTypes = {
  organisationName: PropTypes.string.isRequired,
  adminName: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleProfileClick: PropTypes.func.isRequired,
};

export default React.memo(AdminHeader);
