import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminHeader from 'shared-components/AdminHeader';
import ProtectedAdminRoute from 'HOC/ProtectedAdminRoute';
import ProblemsListContainer from 'modules/admin/problemsList/ProblemsListContainer';
import { ADMIN_ROUTES } from 'constants/routeConstants';
import DefaultRulesContainer from 'modules/admin/defaultRules/DefaultRulesContainer';
import { Col, Container, Row } from 'core-components';
import SideNavContainer from 'modules/admin/sideNav/SideNavContainer';
import AdminHomeConatiner from 'modules/admin/adminHome/AdminHomeContainer';
import EditDriveContainer from 'modules/admin/editDrive/EditDriveCotainer';
import CreateDriveContainer from 'modules/admin/createDrive/CreateDriveCotainer';
import ShowCandidateListContainer from 'modules/admin/showCandidateList/ShowCandidateListContainer';
import DriveResultContainer from 'modules/admin/driveResult/DriveResultContainer';
import SendEmailInviteContainer from 'modules/admin/sendEmailInvite/SendEmailInviteContainer';
import ProblemDetailsContainer from 'modules/admin/problemDetails/ProblemDetailsContainer';
import CreateProblemContainer from 'modules/admin/createProblem/CreateProblemContainer';
import EditProblemContainer from 'modules/admin/editProblem/EditProblemContainer';
import UserProfileContainer from 'modules/admin/userProfile/UserProfileContainer';
import InviteUserContainer from 'modules/admin/inviteUser/InviteUserContainer';
import SnapshotsContainer from 'modules/admin/snapshots/SnapshotsContainer';

function AdminRoutes() {
  const { path } = useRouteMatch();

  return (
    <Container className='h-100 ' fluid>
      <Row>
        <AdminHeader />
      </Row>
      <Row>
        <Col>
          <SideNavContainer />
        </Col>
        <Col style={{ height: '90vh' }} className=' overflow-auto' md={10} lg={10} xl={10}>
          <Switch>
            <ProtectedAdminRoute
              path={path + ADMIN_ROUTES.HOME}
              component={AdminHomeConatiner}
            />
            <ProtectedAdminRoute
              exact
              path={path + ADMIN_ROUTES.PROBLEMS}
              component={ProblemsListContainer}
            />
            <ProtectedAdminRoute
              path={path + ADMIN_ROUTES.RULES}
              component={DefaultRulesContainer}
            />
            <ProtectedAdminRoute
              exact
              path={path + ADMIN_ROUTES.EDIT_DRIVE}
              component={EditDriveContainer}
            />
            <ProtectedAdminRoute
              exact
              path={path + ADMIN_ROUTES.CREATE_DRIVE}
              component={CreateDriveContainer}
            />
            <ProtectedAdminRoute
              exact
              path={path + ADMIN_ROUTES.SHOW_CANDIDATES}
              component={ShowCandidateListContainer}
            />
            <ProtectedAdminRoute
              exact
              path={path + ADMIN_ROUTES.DRIVE_RESULT}
              component={DriveResultContainer}
            />
            <ProtectedAdminRoute
              exact
              path={path + ADMIN_ROUTES.INVITE_CANDIDATES}
              component={SendEmailInviteContainer}
            />
            <ProtectedAdminRoute
              exact
              path={path + ADMIN_ROUTES.PROBLEM_DETAILS}
              component={ProblemDetailsContainer}
            />
            <ProtectedAdminRoute
              exact
              path={path + ADMIN_ROUTES.EDIT_PROBLEM}
              component={EditProblemContainer}
            />
            <ProtectedAdminRoute
              exact
              path={path + ADMIN_ROUTES.CREATE_PROBLEM}
              component={CreateProblemContainer}
            />
            <ProtectedAdminRoute
              exact
              path={path + ADMIN_ROUTES.USER_PROFILE}
              component={UserProfileContainer}
            />
            <ProtectedAdminRoute
              exact
              path={path + ADMIN_ROUTES.INVITE_USER}
              component={InviteUserContainer}
            />
            <ProtectedAdminRoute
              exact
              path={path + ADMIN_ROUTES.SNAPSHOTS}
              component={SnapshotsContainer}
            />
            <Redirect to={path} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminRoutes;
