import React from 'react';
import { Col, Row, Button, Container } from 'core-components';
import './sideNavStyle.css';
import { ROUTES } from 'constants/routeConstants';

const SideNavComponent = () => {
  return (
    <Container fluid className='p-0'>
      <Row
        lg={4}
        md={4}
        className='bg-dark justify-content-around admin-sidenav-height'
      >
        <Col className='m-5 text-white font-weight-bold'>
          <Row className='border-bottom mb-3'>
            <h3 className='font-weight-bold'>Josh Software</h3>
          </Row>
          <Row>
            <Button className='p-2 bg-transparent border-0'>Create Drive</Button>
          </Row>
          <Row>
            <Button className='p-2 bg-transparent border-0'>Create Problem</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(SideNavComponent);
