import PropTypes from 'prop-types';

import { Col, Container, Row, Button } from 'core-components';

import AdminHeader from 'shared-components/AdminHeader';
import CreateDriveContainer from 'modules/admin/createDrive/CreateDriveCotainer';
import SideNavContainer from 'modules/admin/sideNav/SideNavContainer';
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
        <Col>
          <SideNavContainer />
        </Col>
        <Col className='max-height' md={10} lg={10} xl={10}>
          {currentHomeComponent === HOME_SCREENS.HOME && <p>Home</p>}
          {currentHomeComponent === HOME_SCREENS.CREATE_DRIVE && (
            <CreateDriveContainer />
          )}

          {currentHomeComponent === HOME_SCREENS.PROBLEMS && <p>PROBLEMS</p>}
        </Col>
      </Row>
    </Container>
  );
};

HomeComponent.propTypes = {
  currentHomeComponent: PropTypes.string.isRequired,
};

export default HomeComponent;
