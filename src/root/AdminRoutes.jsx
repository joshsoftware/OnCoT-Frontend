import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import ProtectedAdminRoute from 'HOC/ProtectedAdminRoute';
import LoginContainer from 'modules/admin/login/LoginContainer';
import HomeContainer from 'modules/admin/home/HomeContainer';

import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';
import AdminHomeComponent from 'components/AdminHomeComponent';

function AdminRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={AdminHomeComponent} />

      <Route exact path={path + ADMIN_ROUTES.LOGIN} component={LoginContainer} />

      <ProtectedAdminRoute
        path={path + ADMIN_ROUTES.HOME}
        component={HomeContainer}
      />

      <Redirect to={path} />
    </Switch>
  );
}

export default AdminRoutes;
