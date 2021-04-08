import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import ProtectedAdminRoute from 'HOC/ProtectedAdminRoute';
import LoginContainer from 'modules/admin/login/LoginContainer';
import HomeContainer from 'modules/admin/home/HomeContainer';

import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';
import AdminHomeComponent from 'components/AdminHomeComponent';
import CreateProblemContainer from 'modules/admin/createProblem/CreateProblemContainer';
import ShowCandidateListContainer from 'modules/admin/showCandidateList/ShowCandidateListContainer';
import DriveResultContainer from 'modules/admin/driveResult/DriveResultContainer';

function AdminRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={AdminHomeComponent} />

      {/* To develop Drive result page */}
      <Route exact path={path + ADMIN_ROUTES.DRIVE_RESULT} component={DriveResultContainer} />

      <Route
        exact
        path={path + ADMIN_ROUTES.LOGIN}
        component={LoginContainer}
      />

      <ProtectedAdminRoute
        path={path + ADMIN_ROUTES.HOME}
        component={HomeContainer}
      />

      <ProtectedAdminRoute
        path={path + ADMIN_ROUTES.SHOW_CANDIDATE_LIST}
        component={ShowCandidateListContainer}
      />

      <Redirect to={path} />
    </Switch>
  );
}

export default AdminRoutes;
