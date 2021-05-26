import PropTypes from 'prop-types';
import React from 'react';
import { Table, Button, Spinner, Row, Col } from 'core-components';
import ReactPaginate from 'react-paginate';
import 'modules/admin/problemsList/ProblemsListComponent/style.css';

const ShowCandidateListComponent = (props) => {
  const { renderTableData, handleAddCandidateClick, pageCount, candidateIsLoading,
    handlePageClick } = props;
  if (candidateIsLoading) {
    return <Spinner className='loader' />;
  }

  return (
    <>
      <Row className='py-4'>
        <Col xl={10} lg={10} md={10} xs={10}>
          <h4>Candidates</h4>
        </Col>
        <Col xs={2} lg={2} xl={2}>
          <Button
            onClick={handleAddCandidateClick}
            className='float-right mr-xl-1 mt-xl-1 mb-xl-1'
          >
            Add Candidates
          </Button>
        </Col>
      </Row>

      <Table dark className='table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Invitation Status</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
      {pageCount > 1 && (
        <ReactPaginate
          previousLabel='<'
          nextLabel='>'
          breakLabel='...'
          breakClassName='break-me'
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName='pagination'
          previousLinkClassName='pagination__link'
          nextLinkClassName='pagination__link'
          disabledClassName='pagination__link--disabled'
          activeClassName='pagination__link--active'
          pageLinkClassName='page__link'
        />
      )}
    </>
  );
};
ShowCandidateListComponent.propTypes = {
  renderTableData: PropTypes.func.isRequired,
  handleAddCandidateClick: PropTypes.func.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  candidateIsLoading: PropTypes.bool.isRequired,
};

export default React.memo(ShowCandidateListComponent);
