import PropTypes from 'prop-types';

import { Col, Container, Row } from 'core-components';

import AdminHeader from 'shared-components/AdminHeader';
import CreateDriveContainer from 'modules/admin/createDrive/CreateDriveCotainer';
import { HOME_SCREENS } from 'modules/admin/home/HomeContainer/constants';

import './style.css';

const HomeComponent = (props) => {
  const { currentHomeComponent } = props;

  return (
    <Container className='max-height' fluid>
      <Row>
        <AdminHeader />
      </Row>
      <Row>
        <Col className='bg-danger max-height' md={2} lg={2} xl={2}>
          <h2>Sidenav</h2>
        </Col>
        <Col className='max-height' md={10} lg={10} xl={10}>
          {currentHomeComponent === HOME_SCREENS.CREATE_DRIVE && (
            <CreateDriveContainer />
          )}
        </Col>
      </Row>
    </Container>
  );
};

HomeComponent.propTypes = {
  currentHomeComponent: PropTypes.string.isRequired,
};

export default HomeComponent;
