import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

import ProtectedAdminRoute from 'HOC/ProtectedAdminRoute';
import LoginContainer from 'modules/admin/login/LoginContainer';
import HomeContainer from 'modules/admin/home/HomeContainer';

import { ADMIN_ROUTES } from 'constants/routeConstants';
import { ADMIN_LOGIN } from 'redux/admin/login/actionConstants';

import axios from 'axios';
import { useDispatch } from 'react-redux';

function AdminRoutes() {
  const { path } = useRouteMatch();

  const history = useHistory();
  const dispatch = useDispatch();
  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response.status === 401) {
        dispatch({
          type: ADMIN_LOGIN.ADMIN_FAILURE_ACTION,
          payload: 'Unauthorized User',
        });
        history.push('/admin/login');
      }
      throw err;
    },
  );
  return (
    <Switch>
      <Route
        exact
        path={path + ADMIN_ROUTES.LOGIN}
        component={LoginContainer}
      />
      <Route exact path={path} component={LoginContainer} />
      <ProtectedAdminRoute
        path={path + ADMIN_ROUTES.HOME}
        component={HomeContainer}
      />
      <Redirect to={path} />
    </Switch>
  );
}

export default AdminRoutes;
