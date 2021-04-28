import { Route, Switch } from 'react-router-dom';

import HomeComponent from 'components/HomeComponent';
import CandidateRoutes from 'root/CandidateRoutes';
import AdminRoutes from 'root/AdminRoutes';
import ReviewerRoutes from 'root/ReviewerRoutes';

import { ROUTES } from 'constants/routeConstants';
import { useSelector } from 'react-redux';
import { adminRoutesHelper } from 'modules/admin/AdminRoutesHelper';

function Routes() {
  const reducer = useSelector((state) => state.unauthorizedUserReducer);
  if (reducer.isUnauthorized) {
    adminRoutesHelper();
  }
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={AdminRoutes} />

      <Route path={ROUTES.ADMIN} component={AdminRoutes} />

      <Route path={ROUTES.REVIEWER} component={ReviewerRoutes} />

      <Route path={ROUTES.CANDIDATE} component={CandidateRoutes} />
    </Switch>
  );
}

export default Routes;
