import { Redirect, Route, Switch } from 'react-router-dom';

import HomeComponent from 'components/HomeComponent';
import Layout from 'HOC/Layout';
import ProtectedRoute from 'root/ProtectedRoute';
import LandingPageContainer from 'containers/LandingPageContainer';
import CandidateProfileContainer from 'containers/CandidateProfileContainer';
import ProfileComponent from 'components/ProfileComponent';

import IDEContainer from 'containers/IdeContainer';
import ROUTES from 'constants/routeConstants';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Layout includeHeader={false} WrappedComponent={HomeComponent} />
      </Route>
      <Route exact path={ROUTES.OVERVIEW}>
        <Layout includeHeader={false} WrappedComponent={LandingPageContainer} />
      </Route>
      {/* Route to test Profile Component */}
      <Route
        path='/profile/create'
        component={ProfileComponent}
        // isAuth
        includeHeader={false}
      />
      <ProtectedRoute
        path={ROUTES.CANDIDATE_DETAILS}
        component={CandidateProfileContainer}
        isAuth
        includeHeader={false}
      />
      <ProtectedRoute
        path={ROUTES.IDE}
        component={IDEContainer}
        isAuth
        includeHeader
      />
      <Redirect to={ROUTES.HOME} />
    </Switch>
  );
}

export default Routes;
