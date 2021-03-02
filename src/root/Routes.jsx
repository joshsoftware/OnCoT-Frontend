import { Redirect, Route, Switch } from 'react-router-dom';

import HomeComponent from 'components/HomeComponent';
import Layout from 'HOC/Layout';
import OverviewContainer from 'containers/OverviewContainer';
import CandidateProfileContainer from 'containers/CandidateProfileContainer';
import IDEContainer from 'containers/IDEContainer';
import ProfileComponent from 'components/ProfileComponent';
import ProtectedRoute from './ProtectedRoute';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Layout includeHeader WrappedComponent={HomeComponent} />
      </Route>
      <Route exact path='/overview'>
        <Layout includeHeader={false} WrappedComponent={OverviewContainer} />
      </Route>
      {/* Route to test Profile Component */}
      <ProtectedRoute
        path='/profile/create'
        component={ProfileComponent}
        isAuth
        includeHeader={false}
      />
      <ProtectedRoute
        path='/candidate/:id/details'
        component={CandidateProfileContainer}
        isAuth
        includeHeader={false}
      />
      <ProtectedRoute
        path='/ide'
        component={IDEContainer}
        isAuth
        includeHeader
      />
      <Redirect to='/' />
    </Switch>
  );
}

export default Routes;
