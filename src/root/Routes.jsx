import { Redirect, Route, Switch } from 'react-router-dom';

import HomeComponent from 'components/HomeComponent';
import Layout from 'HOC/Layout';
import ProtectedRoute from 'root/ProtectedRoute';
import LandingPageContainer from 'containers/LandingPageContainer';
import ProfileComponent from 'components/ProfileComponent';
import IdeComponent from 'components/IdeComponent';

import ROUTES from 'constants/routeConstants';

function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Layout WrappedComponent={HomeComponent} />
      </Route>
      <Route exact path={ROUTES.OVERVIEW}>
        <Layout includeHeader={false} WrappedComponent={LandingPageContainer} />
      </Route>
      <ProtectedRoute
        path={ROUTES.RULES_AND_PROFILE}
        component={ProfileComponent}
        isAuth
        includeHeader={false}
      />
      <ProtectedRoute
        path={ROUTES.IDE}
        component={IdeComponent}
        isAuth
        includeHeader
      />
      <Redirect to={ROUTES.HOME} />
    </Switch>
  );
}

export default Routes;
