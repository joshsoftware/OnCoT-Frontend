import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import ProtectedAdminRoute from 'HOC/ProtectedAdminRoute';
import LoginContainer from 'modules/admin/login/LoginContainer';
import HomeContainer from 'modules/admin/home/HomeContainer';

import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';
import AdminHomeComponent from 'components/AdminHomeComponent';
import DriveResultContainer from 'modules/admin/driveResult/DriveResultContainer';
import CreateProblemContainer from 'modules/admin/createProblem/CreateProblemContainer';

function AdminRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={AdminHomeComponent} />

      {/* To develop Drive result page */}
      <Route exact path={path + ADMIN_ROUTES.DRIVE_RESULT} component={DriveResultContainer} />
      {/* to develop create problem page */}
      <Route exact path={path + ADMIN_ROUTES.CREATE_PROBLEM} component={CreateProblemContainer} />

      <Route
        exact
        path={path + ADMIN_ROUTES.LOGIN}
        component={LoginContainer}
      />

      <ProtectedAdminRoute
        path={path + ADMIN_ROUTES.HOME}
        component={HomeContainer}
      />

      <Redirect to={path} />
    </Switch>
  );
}

export default AdminRoutes;
