import { Container, Row, Col } from "reactstrap";
import UserProfileContainer from "containers/UserProfileContainer"
import RulesContainer from "containers/RulesContainer"
import "./profileStyle.css";

const ProfileComponent = () => {
    return(
        <Container className="no-gutters d-flex my-height" fluid = {true}>
        <Row>
          <Col xs={6} md={4} className = "grey">
              <UserProfileContainer/>
          </Col>
          <Col xs={12} md={8} className = "green">
              <RulesContainer/>
          </Col>
        </Row>
        </Container>
  );
}

export default ProfileComponent;