import React from 'react';

import { Container } from 'core-components';

import './endPage.css';

function TestEndPageComponent() {
  return (
    <Container fluid className='dark'>
      <div className='custom-padding text-center text-white'>
        <h3>Thank you!</h3>
        <h3 className='font-weight-bolder title-color'>
          Test Completed!
        </h3>
      </div>
    </Container>
  );
}

export default React.memo(TestEndPageComponent);
