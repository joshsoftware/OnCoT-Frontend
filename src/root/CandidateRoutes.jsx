import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import HomeComponent from 'components/HomeComponent';
import ProtectedRoute from 'HOC/ProtectedRoute';
import LandingPageContainer from 'containers/LandingPageContainer';
import ProfileComponent from 'components/ProfileComponent';
import IdeContainer from 'containers/IdeContainer';
import TestEndPageContainer from 'containers/TestEndPageContainer';

import { CANDIDATE_ROUTES } from 'constants/routeConstants';

function CandidateRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={HomeComponent} />

      <Route
        exact
        path={path + CANDIDATE_ROUTES.OVERVIEW}
        component={LandingPageContainer}
      />

      <Route
        path={path + CANDIDATE_ROUTES.RULES_AND_PROFILE}
        component={ProfileComponent}
      />
      <ProtectedRoute
        path={path + CANDIDATE_ROUTES.IDE}
        component={IdeContainer}
      />
      <Route
        path={path + CANDIDATE_ROUTES.ENDPAGE}
        component={TestEndPageContainer}
      />
      <Redirect to={path} />
    </Switch>
  );
}

export default CandidateRoutes;
