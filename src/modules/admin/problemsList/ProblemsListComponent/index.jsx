import PropTypes from 'prop-types';
import React from 'react';
import { Table, Button, Spinner, Row, Col } from 'core-components';
import './style.css';
import ReactPaginate from 'react-paginate';

const ProblemsListComponent = ({ renderTableData, pageCount,
  handlePageClick, problemIsLoading, handleAddProblemClick }) => {
  if (problemIsLoading) {
    return <Spinner className='loader' />;
  }

  return (
    <>
      <Row className='py-4'>
        <Col xs={10} lg={10} xl={10}>
          <ReactPaginate
            previousLabel='← Previous'
            nextLabel='Next →'
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
        </Col>
        <Col xs={2} lg={2} xl={2}>
          <Button onClick={handleAddProblemClick} className='mr-xl-1 mt-xl-1 mb-xl-1'>
            Add Problem
          </Button>
        </Col>
      </Row>
      <Table dark>
        <thead>
          <tr><th colSpan='6'>Problems Bank</th></tr>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
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
  handlePageClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default React.memo(ProblemsListComponent);
