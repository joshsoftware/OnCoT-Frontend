import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import LoginContainer from 'modules/admin/login/LoginContainer';

function AdminRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={LoginContainer} />

      <Redirect to={path} />
    </Switch>
  );
}

export default AdminRoutes;
