import React from 'react';

import { Container, Row, Col } from 'core-components';
import RulesContainer from 'containers/RulesContainer';
import UserProfileContainer from 'containers/UserProfileContainer/index';

const ProfileComponent = () => (
  <Container fluid className='px-0 overflow-hidden'>
    <Row>
      <Col className='pr-0' xs={12} md={4} xl={4}>
        <UserProfileContainer />
      </Col>
      <Col className='pl-0' xs={12} md={8} xl={8}>
        <RulesContainer />
      </Col>
    </Row>
  </Container>
);

export default React.memo(ProfileComponent);
