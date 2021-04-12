import React from 'react';
import { useDispatch } from 'react-redux';

import { Col, Row, Button, Container } from 'core-components';

import './sideNavStyle.css';

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
                dispatch({ type: 'HOME', payload: 'HOME' });
              }}
            >
              HOME
            </Button>
          </Row>
          <Row className='p-3 mt-3'>
            <Button
              className='w-100'
              onClick={() => {
                dispatch({ type: 'PROBLEMS', payload: 'PROBLEMS' });
              }}
            >
              Problems
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(SideNavComponent);
