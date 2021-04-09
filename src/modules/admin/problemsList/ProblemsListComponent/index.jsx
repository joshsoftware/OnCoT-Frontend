import PropTypes from 'prop-types';
import React from 'react';
import { Table, Button, Spinner } from 'core-components';
import './style.css';

const ProblemsListComponent = (
  { renderTableData, problemIsLoading, handleAddProblemClick },
) => {
  if (problemIsLoading) {
    return <Spinner className='loader' />;
  }

  return (
    <>
      <Button onClick={handleAddProblemClick} className='float-right mr-xl-5 mt-xl-5 mb-xl-5'>
        Add Problem
      </Button>
      <Table dark>
        <thead>
          <tr><th colSpan='6'>Problems Bank</th></tr>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Marks</th>
            <th aria-label='Action' />
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
    </>
  );
};

ProblemsListComponent.propTypes = {
  renderTableData: PropTypes.func.isRequired,
  problemIsLoading: PropTypes.bool.isRequired,
  handleAddProblemClick: PropTypes.func.isRequired,

};

export default React.memo(ProblemsListComponent);
