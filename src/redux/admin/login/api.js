import axios from 'axios';
import { ADMIN_LOGIN_LINK } from 'redux/admin/login/constants';

export const adminLoginPostApi = (data) => {
  return axios.post(ADMIN_LOGIN_LINK, data);
};
