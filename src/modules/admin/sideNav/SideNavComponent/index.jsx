import React from 'react';
import { Col, Row, Button, Container } from 'core-components';
import './sideNavStyle.css';
import { ROUTES } from 'constants/routeConstants';
import { useDispatch, useSelector } from 'react-redux';

const SideNavComponent = () => {
  const dispatch = useDispatch();

  return (
    <Container fluid className='p-0'>
      <Row className='bg-dark justify-content-around admin-sidenav-height'>
        <Col className='text-white font-weight-bold border-top'>
          <Row className='p-3 mt-3'>
            <Button
              className='w-100'
              onClick={() => {
                dispatch({ type: 'CREATE_DRIVE', payload: 'CREATE_DRIVE' });
              }}
            >
              Create Drive
            </Button>
          </Row>
          <Row className='p-3 mt-3'>
            <Button
              className='w-100'
              onClick={() => {
                dispatch({ type: 'PROBLEMS', payload: 'PROBLEMS' });
              }}
            >
              Create Problem
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(SideNavComponent);
