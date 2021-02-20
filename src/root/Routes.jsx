import { Redirect, Route, Switch } from "react-router-dom";

import HomeComponent from "components/HomeComponent";
import Layout from "HOC/Layout";
import ProtectedRoute from "root/ProtectedRoute";
import LandingPageContainer from "containers/LandingPageContainer";
import CandidateProfileContainer from "containers/CandidateProfileContainer";
import IDEContainer from "containers/IDEContainer";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Layout includeHeader={true} WrappedComponent={HomeComponent} />
      </Route>
      <Route exact path="/overview">
        <Layout includeHeader={false} WrappedComponent={LandingPageContainer} />
      </Route>
      <ProtectedRoute
        path="/candidate/:id/details"
        component={CandidateProfileContainer}
        isAuth={true}
        includeHeader={false}
      />
      <ProtectedRoute
        path="/ide"
        component={IDEContainer}
        isAuth={true}
        includeHeader={true}
      />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
