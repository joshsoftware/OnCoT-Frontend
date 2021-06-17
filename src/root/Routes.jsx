import { Route, Switch, useRouteMatch } from 'react-router-dom';

import HomeComponent from 'components/HomeComponent';
import CandidateRoutes from 'root/CandidateRoutes';
import AdminRoutes from 'root/AdminRoutes';
import ReviewerRoutes from 'root/ReviewerRoutes';
import LoginContainer from 'modules/admin/login/LoginContainer';
import { ROUTES, ADMIN_AUTH_ROUTES } from 'constants/routeConstants';

function Routes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={LoginContainer} />
      <Route path={ROUTES.ADMIN + ADMIN_AUTH_ROUTES.LOGIN} component={LoginContainer} />

      <Route exact path={ROUTES.HOME} component={AdminRoutes} />

      <Route path={ROUTES.ADMIN} component={AdminRoutes} />

      <Route path={ROUTES.REVIEWER} component={ReviewerRoutes} />

      <Route path={ROUTES.CANDIDATE} component={CandidateRoutes} />
    </Switch>
  );
}

export default Routes;
