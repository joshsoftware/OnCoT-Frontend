import PropTypes from 'prop-types';
import ShowCandidateListContainer from 'modules/admin/showCandidateList/ShowCandidateListContainer';

import { Col, Container, Row } from 'core-components';
import AdminHeader from 'shared-components/AdminHeader';

import SideNavContainer from 'modules/admin/sideNav/SideNavContainer';
import ProblemsListContainer from 'modules/admin/problemsList/ProblemsListContainer';
import CreateDriveContainer from 'modules/admin/createDrive/CreateDriveCotainer';
import EditDriveContainer from 'modules/admin/editDrive/EditDriveCotainer';
import AdminHomeConatiner from 'modules/admin/adminHome/AdminHomeContainer';
import DriveResultContainer from 'modules/admin/driveResult/DriveResultContainer';
import SendEmailInviteContainer from 'modules/admin/sendEmailInvite/SendEmailInviteContainer';
import CreateProblemContainer from 'modules/admin/createProblem/CreateProblemContainer';
import EditProblemContainer from 'modules/admin/editProblem/EditProblemContainer';

import { HOME_SCREENS } from 'modules/admin/home/HomeContainer/constants';

import './style.css';
import ProblemDetailsContainer from 'modules/admin/problemDetails/ProblemDetailsContainer';
import UserProfileContainer from 'modules/admin/userProfile/UserProfileContainer';

const HomeComponent = (props) => {
  const { currentHomeComponent } = props;

  return (
    <Container className='h-100 ' fluid>
      <Row>
        <AdminHeader />
      </Row>
      <Row>
        <Col>
          <SideNavContainer />
        </Col>
        <Col className='max-height overflow-auto' md={10} lg={10} xl={10}>
          {currentHomeComponent === HOME_SCREENS.HOME && <AdminHomeConatiner />}
          {currentHomeComponent === HOME_SCREENS.EDIT_DRIVE && (
            <EditDriveContainer />
          )}
          {currentHomeComponent === HOME_SCREENS.INVITE_CANDIDATES && (
            <SendEmailInviteContainer />
          )}
          {currentHomeComponent === HOME_SCREENS.SHOW_CANDIDATES && (
            <ShowCandidateListContainer />
          )}
          {currentHomeComponent === HOME_SCREENS.DRIVE_RESULT && (
            <DriveResultContainer />
          )}
          {currentHomeComponent === HOME_SCREENS.CREATE_DRIVE && (
            <CreateDriveContainer />
          )}
          {currentHomeComponent === HOME_SCREENS.PROBLEMS && (
            <ProblemsListContainer />
          )}
          {currentHomeComponent === HOME_SCREENS.PROBLEM_DETAILS && (
            <ProblemDetailsContainer />
          )}
          {currentHomeComponent === HOME_SCREENS.CREATE_PROBLEM && (
            <CreateProblemContainer />
          )}
          {currentHomeComponent === HOME_SCREENS.EDIT_PROBLEM && (
            <EditProblemContainer />
          )}
          {currentHomeComponent === HOME_SCREENS.USER_PROFILE && (
            <UserProfileContainer />
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
