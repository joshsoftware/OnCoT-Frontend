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
        <Col xl={10} lg={10} md={10} xs={10}>
          <h4>Problems Bank</h4>
        </Col>
        <Col xs={2} lg={2} xl={2}>
          <Button onClick={handleAddProblemClick} className='mr-xl-1 mt-xl-1 mb-xl-1'>
            Add Problem
          </Button>
        </Col>
      </Row>
      <Table dark>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th aria-label='Action' />
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
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
