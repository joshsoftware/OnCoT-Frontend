import { Redirect, Route, Switch } from 'react-router-dom';

import HomeComponent from 'components/HomeComponent';
import Layout from 'HOC/Layout';
import OverviewContainer from 'containers/OverviewContainer';
import CandidateProfileContainer from 'containers/CandidateProfileContainer';
import IDEContainer from 'containers/IdeContainer/index';
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
