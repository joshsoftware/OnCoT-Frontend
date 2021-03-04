import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, restricted, ...rest }) {
  const {
    authToken,
    data: { role },
  } = useSelector((state) => state.userProfileReducer);

  if (role === 'admin' && restricted !== 'admin' && restricted !== '') {
    return <Redirect to='/admin' />;
  }

  if (role === 'reviewer' && restricted !== 'reviewer' && restricted !== '') {
    return <Redirect to='/reviewer' />;
  }

  if (role === 'candidate' && restricted !== 'candidate' && restricted !== '') {
    return <Redirect to='/candidate' />;
  }

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
