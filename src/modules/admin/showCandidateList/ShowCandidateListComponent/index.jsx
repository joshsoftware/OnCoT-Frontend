import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,
  Row,
  Input,
  Table,
  Button,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Spinner,
} from 'core-components';

const ShowCandidateListComponent = (props) => {
  const { handleQueryChange, query, renderTableData, handleAddCandidateClick } = props;

  return (
    <>

      <Row className='py-4'>
        <Col xs={10} lg={10} xl={10}>
          <Input
            type='text'
            value={query}
            onChange={handleQueryChange}
            placeholder='Search'
          />
        </Col>
        <Col xs={2} lg={2} xl={2}>
          <Button
            onClick={handleAddCandidateClick}
            className='float-right mr-xl-5 mt-xl-5 mb-xl-5'
          >
            Add Candidates
          </Button>
        </Col>
      </Row>

      <Table dark className='table-bordered'>
        <thead>
          <tr>
            <th colSpan='6' className='px-3'>
              Candidates
            </th>
          </tr>
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
  handleQueryChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default React.memo(ShowCandidateListComponent);
