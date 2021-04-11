import PropTypes from 'prop-types';
import React from 'react';
import { Table, Button, Spinner } from 'core-components';

const ShowCandidateListComponent = (props) => {
  const { renderTableData, handleAddCandidateClick } = props;

  return (
    <>
      <Button onClick={handleAddCandidateClick} className='float-right mr-xl-5 mt-xl-5 mb-xl-5'>Add Candidates</Button>
      <Table dark className='table-bordered'>
        <thead>
          <tr><th colSpan='6' className='px-3'>Candidates</th></tr>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
    </>
  );
};
ShowCandidateListComponent.propTypes = {
  renderTableData: PropTypes.func.isRequired,
  handleAddCandidateClick: PropTypes.func.isRequired,
};

export default React.memo(ShowCandidateListComponent);
