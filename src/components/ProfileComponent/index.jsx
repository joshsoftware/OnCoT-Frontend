import { Container, Row, Col } from 'reactstrap';
import UserProfileContainer from 'containers/UserProfileContainer/index';
import RulesContainer from 'containers/RulesContainer';

const ProfileComponent = () => (
  <Container className='px-0 overflow-hidden' fluid>
    <Row>
      <Col lg={5}>
        <UserProfileContainer />
      </Col>
      <Col lg={7} className='bg-success'>
        <RulesContainer />
      </Col>
    </Row>
  </Container>
);

export default ProfileComponent;
