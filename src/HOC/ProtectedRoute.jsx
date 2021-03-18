import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, restricted, ...rest }) {
  const {
    authToken,
  } = useSelector((state) => state.candidateFormReducer);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authToken) {
          return <Component {...props} />;
        }
        return <Redirect to='/' />;
      }}
    />
  );
}

ProtectedRoute.defaultProps = {
  restricted: '',
};

ProtectedRoute.propTypes = {
  component: PropTypes.shape().isRequired,
  restricted: PropTypes.string,
};

export default ProtectedRoute;
