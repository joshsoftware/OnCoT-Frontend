import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { ADMIN_LOGIN } from 'redux/admin/login/actionConstants';

export const adminRoutesHelper = () => {
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
        localStorage.clear();
        history.push('/admin/login');
      }
      throw err;
    },
  );
};
