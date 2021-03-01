import { Container, Row, Col } from "reactstrap";
import UserProfileContainer from "containers/UserProfileContainer"
import RulesContainer from "containers/RulesContainer"

const ProfileComponent = () => {
    return(
        <Container className="no-gutters d-flex my-height" fluid = {true}>
        <Row>
          <Col lg={7} >
              <UserProfileContainer/>
          </Col>
          <Col lg={5} className = "bg-success">
              <RulesContainer/>
          </Col>
        </Row>
        </Container>
  );
}

export default ProfileComponent;