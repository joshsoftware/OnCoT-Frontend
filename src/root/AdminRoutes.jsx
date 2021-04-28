import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import ProtectedAdminRoute from 'HOC/ProtectedAdminRoute';
import LoginContainer from 'modules/admin/login/LoginContainer';
import HomeContainer from 'modules/admin/home/HomeContainer';

import { ADMIN_ROUTES } from 'constants/routeConstants';

import { adminRoutesHelper } from 'modules/admin/AdminRoutesHelper';

function AdminRoutes() {
  const { path } = useRouteMatch();
  adminRoutesHelper();

  return (
    <Switch>
      <Route
        exact
        path={path + ADMIN_ROUTES.LOGIN}
        component={LoginContainer}
      />
      <Route exact path={path} component={LoginContainer} />
      <ProtectedAdminRoute
        path={path + ADMIN_ROUTES.HOME}
        component={HomeContainer}
      />
      <Redirect to={path} />
    </Switch>
  );
}

export default AdminRoutes;
