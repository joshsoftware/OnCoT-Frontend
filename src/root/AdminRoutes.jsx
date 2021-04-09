import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import ProtectedAdminRoute from 'HOC/ProtectedAdminRoute';
import LoginContainer from 'modules/admin/login/LoginContainer';
import HomeContainer from 'modules/admin/home/HomeContainer';

import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';
import AdminHomeComponent from 'components/AdminHomeComponent';
import DriveResultContainer from 'modules/admin/driveResult/DriveResultContainer';
import CreateProblemComponent from 'modules/admin/createProblem/CreateProblemComponent';

function AdminRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      {/* To develop Drive result page */}
      <Route exact path={path + ADMIN_ROUTES.DRIVE_RESULT} component={DriveResultContainer} />

      <Route
        exact
        path={path + ADMIN_ROUTES.LOGIN}
        component={LoginContainer}
      />

      <Route
        exact
        path={path + ADMIN_ROUTES.CREATE_PROBLEM}
        component={CreateProblemComponent}
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
