import { Container, Row, FormGroup, Label, Table } from 'core-components';
import React from 'react';
import PropTypes from 'prop-types';

const DriveResultComponent = ({
  renderTableData,
}) => {
  return (
    <Container fluid>
      <FormGroup>
        <Label>
          <h6>Drive Result</h6>
        </Label>
        <Table dark>
          <thead>
            <tr>
              <th>Candidate Id</th>
              <th>Score</th>
              <th>Test End Time</th>
            </tr>
          </thead>
          <tbody className='bg-secondary'>
            { renderTableData }
          </tbody>
        </Table>
      </FormGroup>
    </Container>
  );
};
DriveResultComponent.propTypes = {
  renderTableData: PropTypes.objectOf(PropTypes.renderTableData).isRequired,
};

export default React.memo(DriveResultComponent);
