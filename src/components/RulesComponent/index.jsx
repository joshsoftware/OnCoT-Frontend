import {Container} from "core-components";
import "./RuleStyle.css";

const RulesComponent = (props) => {
    return(
        <Container className = "green p-5 overflow-auto" >
        <h4 className = "text-center text-white font-weight-bold mb-3">Rules</h4>
        <h6 className = "text-white font-weight-light">{props.data}</h6>
        </Container>
    );
}

export default RulesComponent;