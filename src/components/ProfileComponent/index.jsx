import { Container, Row, Col } from "core-components";

import UserProfileContainer from "containers/UserProfileContainer";
import RulesContainer from "containers/RulesContainer";

const ProfileComponent = () => {
    return(
      <Container fluid className = "px-0 overflow-hidden">
        <Row>
          <Col xs={12} md={4} xl={4}>
            <UserProfileContainer/>
          </Col>
          <Col xs={12} md={8} xl={8}>
            <RulesContainer/>
          </Col>
        </Row>
      </Container>
  );
}

export default ProfileComponent;