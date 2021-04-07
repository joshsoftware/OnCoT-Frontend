import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

function ProtectedAdminRoute({ component: Component, restricted, ...rest }) {
  const { accessToken } = useSelector((state) => state.adminLoginReducer);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (accessToken) {
          return <Component {...props} />;
        }
        return <Redirect to='/' />;
      }}
    />
  );
}

ProtectedAdminRoute.defaultProps = {
  restricted: '',
};

ProtectedAdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
  restricted: PropTypes.string,
};

export default ProtectedAdminRoute;
