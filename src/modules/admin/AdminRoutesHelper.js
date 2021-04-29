import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setUnauthorized } from 'redux/admin/unauthorizedUser/action';

export const adminRoutesHelper = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response.status === 401) {
        dispatch(setUnauthorized(true));
        localStorage.clear();
        history.push('/admin/login');
      }
      throw err;
    },
  );
};
