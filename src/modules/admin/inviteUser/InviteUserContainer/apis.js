import axios from 'axios';
import local from 'utils/local';
import { SERVER_URL } from 'constants/appConstants';

export const sendEmailsApi = (data) => {
  return axios({
    method: 'post',
    url: `${SERVER_URL}admin/invite_user`,
    data,
    headers: {
      'Content-Type': 'application/json',
      'access-token': local.getItem('accessToken'),
      'token-type': local.getItem('token-type'),
      client: local.getItem('client'),
      expiry: local.getItem('expiry'),
      uid: local.getItem('uid'),
    },
  });
};

export const deactivateUsersApi = (data) => {
  return axios({
    method: 'put',
    url: `${SERVER_URL}admin/users/${data.id}`,
    data,
    headers: {
      'Content-Type': 'application/json',
      'access-token': local.getItem('accessToken'),
      'token-type': local.getItem('token-type'),
      client: local.getItem('client'),
      expiry: local.getItem('expiry'),
      uid: local.getItem('uid'),
    },
  });
};

export const getUsersApi = (organization_id) => {
  return axios({
    method: 'get',
    url: `${SERVER_URL}admin/users?organization_id=${organization_id}`,
    headers: {
      'Content-Type': 'application/json',
      'access-token': local.getItem('accessToken'),
      'token-type': local.getItem('token-type'),
      client: local.getItem('client'),
      expiry: local.getItem('expiry'),
      uid: local.getItem('uid'),
    },
  });
};
