import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import LoginContainer from 'modules/admin/login/LoginContainer';
import SideNavContainer from 'modules/admin/sideNav/SideNavContainer';
import { ADMIN_ROUTES } from 'constants/routeConstants';

function AdminRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={LoginContainer} />
      <Route exact path={path + ADMIN_ROUTES.SIDENAV} component={SideNavContainer} />
      <Redirect to={path} />
    </Switch>
  );
}

export default AdminRoutes;
