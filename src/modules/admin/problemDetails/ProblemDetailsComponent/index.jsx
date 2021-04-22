import { Container, Row } from 'core-components';
import PropTypes from 'prop-types';
import React from 'react';

const ProblemDetailsComponent = (props) => {
  const { renderProblemDetails } = props;
  return (
    <Container fluid>
      <Row className='justify-content-center mt-5'>
        {renderProblemDetails()}
      </Row>
    </Container>
  );
};
ProblemDetailsComponent.propTypes = {
  renderProblemDetails: PropTypes.func.isRequired,
};

export default React.memo(ProblemDetailsComponent);
