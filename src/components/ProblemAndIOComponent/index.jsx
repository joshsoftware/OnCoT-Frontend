import React from 'react';

import { Container, Row } from 'core-components';
import IdeContainer from 'containers/IdeContainer';
import ProblemsContainer from 'containers/ProblemsContainer';

const ProblemAndIOComponent = () => (
  <Container fluid className='container-height overflow-hidden'>
    <Row lg={12} xl={12}>
      <ProblemsContainer />
      <IdeContainer />
    </Row>
  </Container>
);

export default React.memo(ProblemAndIOComponent);
