import { Container, Row, FormGroup, Col, Table, Button } from 'core-components';
import React from 'react';
import PropTypes from 'prop-types';

const DriveResultComponent = ({
  renderTableData,
  errorMessage,
  isError,
  isLoading,
  handleDownloadResult,
}) => {
  const error = () => {
    if (isError) {
      return <h6 className='text-danger font-weight-light'>{errorMessage}</h6>;
    }
  };

  return (
    <Container fluid className='px-5'>
      <FormGroup>
        <Row fluid className='py-4 px-3 justify-content-center'>
          <Col xl={10} lg={10} md={10} xs={10}>
            <h4>Drive Result</h4>
          </Col>
          <Col xl={2} lg={2} md={2} xs={2} className='d-flex flex-row-reverse'>
            <Button onClick={handleDownloadResult}>Download Results</Button>
          </Col>
        </Row>
        <Row className='px-3'>
          <Table dark>
            <thead>
              <tr>
                <th>Candidate Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Score</th>
              </tr>
            </thead>
            {error()}
            <tbody className='bg-secondary'>{renderTableData}</tbody>
          </Table>
        </Row>
      </FormGroup>
    </Container>
  );
};
DriveResultComponent.propTypes = {
  renderTableData: PropTypes.checkPropTypes.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleDownloadResult: PropTypes.func.isRequired,
};

export default React.memo(DriveResultComponent);
