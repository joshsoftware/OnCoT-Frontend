import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Layout from 'HOC/Layout';

function ProtectedRoute(props) {
  const { isAuth, component: Component, includeHeader, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(prop) => {
        if (isAuth) {
          return (
            <Layout
              includeHeader={includeHeader}
              WrappedComponent={Component}
            />
          );
        }
        return (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        );
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.string.isRequired,
  includeHeader: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
};

export default ProtectedRoute;
