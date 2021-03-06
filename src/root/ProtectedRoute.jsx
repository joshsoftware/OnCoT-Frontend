import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Layout from 'HOC/Layout';
import { useSelector } from 'react-redux';
import ROUTES from 'constants/routeConstants';

function ProtectedRoute({ component: Component, includeHeader, ...rest }) {
  const { authToken } = useSelector((state) => state.candidateFormReducer);
  console.log(authToken);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authToken) {
          return (
            <Layout
              includeHeader={includeHeader}
              WrappedComponent={Component}
            />
          );
        }
        return <Redirect to={ROUTES.HOME} />;
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  includeHeader: PropTypes.bool.isRequired,
  location: PropTypes.shape().isRequired,
};

export default ProtectedRoute;
