import {Container, Row} from "reactstrap";
import "./problemStyle.css";

const ProblemComponent = (props) => {
    return(
        <Container fluid = {true} className = "problemBody p-5">
            <h4 className = "text-center text-white font-weight-bold mb-3">Problem Statement</h4>
            <Row className = "text-white font-weight-light">{props.data}</Row>
        </Container>
    )
}

export default ProblemComponent;