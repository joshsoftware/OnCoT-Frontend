import PropTypes from 'prop-types';
import React from 'react';
import { Table, Button, Spinner } from 'core-components';
import { Link } from 'react-router-dom';

const ShowCandidateListComponent = (props) => {
  const { renderTableData, candidtesLodaning, handleAddCandidateClick } = props;

  // if (candidtesLodaning) {
  //   return <Spinner />;
  // }
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
            <th aria-label='Action' />
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
    </>
  );
};
ShowCandidateListComponent.propTypes = {
  renderTableData: PropTypes.func.isRequired,
  candidtesLodaning: PropTypes.bool.isRequired,
  handleAddCandidateClick: PropTypes.func.isRequired,
};

export default React.memo(ShowCandidateListComponent);
