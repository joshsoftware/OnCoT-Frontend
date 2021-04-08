import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Button,
  Spinner,
  Alert,
  Col,
} from 'core-components';

const AdminHomeComponent = (props) => {
  const {
    driveDetailsData,
    renderOngoingDrives,
    renderCompletedDrives,
    renderUpcomingDrives,
    handleQueryChange,
    query,
  } = props;
  const dispatch = useDispatch();

  return (
    <Container fluid className='height-90'>
      <Row className='py-4'>
        <Col xs={10} lg={10} xl={10}>
          <Input type='text' value={query} onChange={handleQueryChange} />
        </Col>
        <Col xs={2} lg={2} xl={2}>
          <Button
            className='w-100'
            onClick={() => {
              dispatch({ type: 'CREATE_DRIVE', payload: 'CREATE_DRIVE' });
            }}
          >
            Create Drive
          </Button>
        </Col>
      </Row>
      <Row className='py-2'>
        <Col xs={10} lg={10} xl={10}>
          <thead>
            <h3 className='px-3'>Ongoing Drives</h3>
          </thead>
          <Table dark className='table-bordered'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Organisation Name</th>
                <th>From</th>
                <th>To</th>
                <th>Edit</th>
                <th>Candidates</th>
              </tr>
            </thead>
            <tbody className='px-3'>{renderOngoingDrives}</tbody>
          </Table>
        </Col>
      </Row>
      <Row className='py-2'>
        <Col xs={10} lg={10} xl={10}>
          <thead>
            <h3 className='px-3'>Upcoming Drives</h3>
          </thead>
          <Table dark className='table-bordered overflow-y-scroll'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Organisation Name</th>
                <th>From</th>
                <th>To</th>
                <th>Edit</th>
                <th>Candidates</th>
              </tr>
            </thead>
            <tbody className='px-3'>{renderUpcomingDrives}</tbody>
          </Table>
        </Col>
      </Row>
      <Row className='py-2'>
        <Col xs={10} lg={10} xl={10}>
          <b>
            <h3 className='px-3'>Completed Drives</h3>
          </b>
          <Table dark className='table-bordered overflow-y-scrollable h-30'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Organisation Name</th>
                <th>From</th>
                <th>To</th>
                <th>Candidates</th>
              </tr>
            </thead>
            <tbody className='px-3'>{renderCompletedDrives}</tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

AdminHomeComponent.propTypes = {
  driveDetailsData: PropTypes.string.isRequired,
  renderOngoingDrives: PropTypes.func.isRequired,
  renderUpcomingDrives: PropTypes.func.isRequired,
  renderCompletedDrives: PropTypes.func.isRequired,
  handleQueryChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
export default React.memo(AdminHomeComponent);
