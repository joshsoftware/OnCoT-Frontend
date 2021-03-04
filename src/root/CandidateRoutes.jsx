import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import HomeComponent from 'components/HomeComponent';
import ProtectedRoute from 'HOC/ProtectedRoute';
import LandingPageContainer from 'containers/LandingPageContainer';
import CandidateProfileContainer from 'containers/CandidateProfileContainer';
import IDEContainer from 'containers/IDEContainer';

import { CANDIDATE_ROUTES } from 'constants/routeConstants';

function CandidateRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={HomeComponent} />

      <Route
        path={path + CANDIDATE_ROUTES.OVERVIEW}
        component={LandingPageContainer}
      />

      <ProtectedRoute
        restricted='candidate'
        path={path + CANDIDATE_ROUTES.CANDIDATE_DETAILS}
        component={CandidateProfileContainer}
      />

      <ProtectedRoute
        restricted='candidate'
        path={path + CANDIDATE_ROUTES.IDE}
        component={IDEContainer}
      />

      <Redirect to={path} />
    </Switch>
  );
}

export default CandidateRoutes;
