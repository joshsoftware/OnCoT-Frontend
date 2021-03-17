import React from 'react';

import { Col, Container, Row } from 'core-components';
import EditorContainer from 'containers/EditorContainer';
import ProblemsContainer from 'containers/ProblemsContainer';
import InputOutputContainer from 'containers/InputOutputContainer';
import Header from 'shared-components/Header';

function IdeComponent() {
  return (
    <Container fluid className='pr-0 overflow-hidden h-100'>
      <Row lg={12} xl={12} className='p-0'>
        <Header />
      </Row>
      <Row>
        <Col className='px-0' lg={5}>
          <Row lg={12} xl={12} className='border-right border-dark'>
            <ProblemsContainer />
            <InputOutputContainer />
          </Row>
        </Col>
        <Col className='px-0' lg={7}>
          <EditorContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default React.memo(IdeComponent);
