import { Col, Row } from "core-components";
import EditorContainer from "containers/EditorContainer";

function IdeComponent() {
  return (
    <Row>
      <Col lg={4}>Problem Statement</Col>
      <Col lg={8}>
        <EditorContainer />
      </Col>
    </Row>
  );
}

export default IdeComponent;
