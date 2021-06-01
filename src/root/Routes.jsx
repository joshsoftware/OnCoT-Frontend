import { Route, Switch } from 'react-router-dom';

import HomeComponent from 'components/HomeComponent';
import CandidateRoutes from 'root/CandidateRoutes';
import AdminRoutes from 'root/AdminRoutes';
import ReviewerRoutes from 'root/ReviewerRoutes';
import AcceptInvitationContainer from 'modules/admin/acceptInvitation/AcceptInvitationContainer';

import { ROUTES } from 'constants/routeConstants';

function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={AdminRoutes} />

      <Route path={ROUTES.ADMIN} component={AdminRoutes} />

      <Route path={ROUTES.REVIEWER} component={ReviewerRoutes} />

      <Route path={ROUTES.CANDIDATE} component={CandidateRoutes} />

      <Route path={ROUTES.ACCEPT_INVITATION} component={AcceptInvitationContainer} />
    </Switch>
  );
}

export default Routes;
