import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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
} from 'core-components';
import classnames from 'classnames';

const AdminHomeComponent = (props) => {
  const { handleQueryChange, query, renderTableData } = props;
  const ongoingDrives = 'ongoingDrives';
  const upcomingDrives = 'upcomingDrives';
  const completedDrives = 'completedDrives';
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const returnTable = (driveStatus) => {
    return (
      <Row className='py-2'>
        <Col>
          <Table dark className='table-bordered'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Organisation Name</th>
                <th>From</th>
                <th>To</th>
                <th>invitation sent</th>
                <th>Appeared</th>
                <th>submissions</th>
                <th>Edit</th>
                <th>Candidates</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody className='px-3'>
              {driveStatus === ongoingDrives
                ? renderTableData('ongoingDrives')
                : renderTableData('upcomingDrives')}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  };

  return (
    <Container fluid className='height-90'>
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
            className='w-100'
            onClick={() => {
              dispatch({ type: 'CREATE_DRIVE', payload: 'CREATE_DRIVE' });
            }}
          >
            Create Drive
          </Button>
        </Col>
      </Row>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1');
              }}
            >
              Ongoing Drives
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle('2');
              }}
            >
              Upcoming Drives
            </NavLink>
          </NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
            }}
          >
            Completed Drives
          </NavLink>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='1'>{returnTable(ongoingDrives)}</TabPane>
          <TabPane tabId='2'>{returnTable(upcomingDrives)}</TabPane>
          <TabPane tabId='3'>
            <Row className='py-2'>
              <Col xs={10} lg={10} xl={10}>
                <Table
                  dark
                  className='table-bordered overflow-y-scrollable h-30'
                >
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Organisation Name</th>
                      <th>From</th>
                      <th>To</th>
                      <th>invitation sent</th>
                      <th>Appeared</th>
                      <th>Submissions</th>
                      <th>Candidates</th>
                    </tr>
                  </thead>
                  <tbody className='px-3'>
                    {renderTableData(completedDrives)}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </Container>
  );
};

AdminHomeComponent.propTypes = {
  renderTableData: PropTypes.func.isRequired,
  handleQueryChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
export default React.memo(AdminHomeComponent);
