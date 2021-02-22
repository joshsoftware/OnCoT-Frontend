import { Container, Row, Col } from "reactstrap";
import UserProfileComponent from "components/ProfileComponent/UserProfileComponent"
import RulesComponent from "components/ProfileComponent/RulesComponent"

const ProfileComponent = () => {
    return(
        <Container className="no-gutters d-flex my-height" fluid = {true}>
        <Row>
          <Col xs={6} md={4} >
              <UserProfileComponent/>
          </Col>
          <Col xs={12} md={8} className = "bg-success">
              <RulesComponent/>
          </Col>
        </Row>
        </Container>
  );
}

export default ProfileComponent;