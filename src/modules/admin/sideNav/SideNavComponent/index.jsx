import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';
import { Col, Row, Button, Container } from 'core-components';

import './sideNavStyle.css';

const SideNavComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Container fluid className='p-0'>
      <Row className='bg-dark justify-content-around admin-sidenav-height'>
        <Col className='text-white font-weight-bold border-top'>
          <Row className='p-3'>
            <Button
              className='w-100'
              onClick={() => { history.push(ROUTES.ADMIN + ADMIN_ROUTES.HOME); }}
            >
              HOME
            </Button>
          </Row>
          <Row className='p-3'>
            <Button
              className='w-100'
              onClick={() => { history.push(ROUTES.ADMIN + ADMIN_ROUTES.PROBLEMS); }}
            >
              Problems
            </Button>
          </Row>
          <Row className='p-3'>
            <Button
              className='w-100'
              onClick={() => { history.push(ROUTES.ADMIN + ADMIN_ROUTES.RULES); }}
            >
              Rules
            </Button>
          </Row>
          <Row className='p-3'>
            <Button
              className='w-100'
              onClick={() => {
                dispatch({ type: 'INVITE_USER', payload: 'INVITE_USER' });
              }}
            >
              Users
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(SideNavComponent);
