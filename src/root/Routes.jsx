import { Redirect, Route, Switch } from "react-router-dom";

import HomeComponent from "components/HomeComponent";
import Layout from "HOC/Layout";
import ProtectedRoute from "root/ProtectedRoute";
import LandingPageContainer from "containers/LandingPageContainer";
import CandidateProfileContainer from "containers/CandidateProfileContainer";

import ROUTES from "constants/routeConstants";
import IdeComponent from "components/IdeComponent";

function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Layout includeHeader={true} WrappedComponent={HomeComponent} />
      </Route>
      <Route exact path={ROUTES.OVERVIEW}>
        <Layout includeHeader={false} WrappedComponent={LandingPageContainer} />
      </Route>
      <ProtectedRoute
        path={ROUTES.CANDIDATE_DETAILS}
        component={CandidateProfileContainer}
        isAuth={true}
        includeHeader={false}
      />
      <ProtectedRoute
        path={ROUTES.IDE}
        component={IdeComponent}
        isAuth={true}
        includeHeader={true}
      />
      <Redirect to={ROUTES.HOME} />
    </Switch>
  );
}

export default Routes;
