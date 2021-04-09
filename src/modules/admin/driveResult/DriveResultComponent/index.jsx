import { Container, Row, FormGroup, Label, Table } from 'core-components';
import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'shared-components/Loading';

const DriveResultComponent = ({
  renderTableData,
  errorMessage,
  isError,
  isLoading,
}) => {
  const loading = () => {
    if (isLoading) {
      return (
        <Loading className='justify-content-center' />
      );
    }
  };
  const error = () => {
    if (isError) {
      return <h6 className='text-danger font-weight-light'>{errorMessage}</h6>;
    }
  };

  return (
    <Container fluid className='px-5'>
      <FormGroup>
        <Row fluid className='p-4 justify-content-center'>
          <h4>Drive Result</h4>
        </Row>
        <Table dark>
          <thead>
            <tr>
              <th>Candidate Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Score</th>
              <th>Test End Time</th>
            </tr>
          </thead>
          {error()}
          {loading()}
          <tbody className='bg-secondary'>
            { renderTableData }
          </tbody>
        </Table>
      </FormGroup>
    </Container>
  );
};
DriveResultComponent.propTypes = {
  renderTableData: PropTypes.checkPropTypes.isRequired,
  errorMessage:PropTypes.string.isRequired,
  isError:PropTypes.bool.isRequired,
  isLoading:PropTypes.bool.isRequired,
};

export default React.memo(DriveResultComponent);
