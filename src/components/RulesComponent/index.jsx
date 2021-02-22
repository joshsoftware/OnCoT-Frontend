import {Container, Row} from "reactstrap";

const RulesComponent = (props) => {
    return(
        <Container fluid = {true} className = "green p-5">
            <h4 className = "text-center text-white font-weight-bold mb-3">Rules</h4>
            <Row className = "text-white font-weight-light">{props.data}</Row>
        </Container>
    );
}

export default RulesComponent;