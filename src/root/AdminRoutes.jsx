import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import AdminHomeComponent from 'components/AdminHomeComponent';

function AdminRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={AdminHomeComponent} />

      <Redirect to={path} />
    </Switch>
  );
}

export default AdminRoutes;
