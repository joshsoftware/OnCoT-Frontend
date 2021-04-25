import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import ProtectedAdminRoute from 'HOC/ProtectedAdminRoute';
import LoginContainer from 'modules/admin/login/LoginContainer';
import HomeContainer from 'modules/admin/home/HomeContainer';

import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';
import CreateProblemContainer from 'modules/admin/createProblem/CreateProblemContainer';
import ShowCandidateListContainer from 'modules/admin/showCandidateList/ShowCandidateListContainer';
import SendEmailInviteContainer from 'modules/admin/sendEmailInvite/SendEmailInviteContainer';
import DriveResultContainer from 'modules/admin/driveResult/DriveResultContainer';
import ProblemDetailsContainer from 'modules/admin/problemDetails/ProblemDetailsContainer';

function AdminRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
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
