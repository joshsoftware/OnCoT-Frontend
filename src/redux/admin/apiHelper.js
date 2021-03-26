import axios from 'axios';
import local from 'utils/local';

export const get = (url, data = '') => {
  return axios.get(url, data, {
    'access-token':local.getItem('accessToken'),
    'token-type': local.getItem('token-type'),
    client: local.getItem('client'),
    expiry: local.getItem('uid'),
    uid: local.getItem('uid'),
  });
};

export const post = (url, data = '') => {
  return axios.post(url, data, {
    'access-token':local.getItem('accessToken'),
    'token-type': local.getItem('token-type'),
    client: local.getItem('client'),
    expiry: local.getItem('uid'),
    uid: local.getItem('uid'),
  });
};

export const patch = (url, data = '') => {
  return axios.patch(url, data, {
    'access-token':local.getItem('accessToken'),
    'token-type': local.getItem('token-type'),
    client: local.getItem('client'),
    expiry: local.getItem('uid'),
    uid: local.getItem('uid'),
  });
};
