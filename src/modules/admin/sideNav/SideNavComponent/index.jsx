import React from 'react';
import { Col, Row, Button, Container } from 'core-components';
import './sideNavStyle.css';
import { ROUTES } from 'constants/routeConstants';

const SideNavComponent = () => {
  return (
    <Container fluid className='p-0'>
      <Row className='bg-dark justify-content-around admin-sidenav-height'>
        <Col className='text-white font-weight-bold border-top'>
          <Row className='mt-3'>
            <Button className='p-3 bg-transparent border-0'>Create Drive</Button>
          </Row>
          <Row>
            <Button className='p-3 bg-transparent border-0'>Create Problem</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(SideNavComponent);
