import { Redirect, Route, Switch } from "react-router-dom";

import HomeComponent from "components/HomeComponent";
import Layout from "HOC/Layout";
import ProtectedRoute from "./ProtectedRoute";
import OverviewContainer from "containers/OverviewContainer";
import CandidateProfileContainer from "containers/CandidateProfileContainer";
import IDEContainer from "containers/IDEContainer";
import ProfileComponent from "components/ProfileComponent";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Layout includeHeader={true} WrappedComponent={HomeComponent} />
      </Route>
      <Route exact path="/overview">
        <Layout includeHeader={false} WrappedComponent={OverviewContainer} />
      </Route>
      {/* Route to test Profile Component */}
      <ProtectedRoute
        path="/profile/create"
        component={ProfileComponent}
        isAuth={true}
        includeHeader={false}
      />
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
