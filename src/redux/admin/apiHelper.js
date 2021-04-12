import axios from 'axios';
import local from 'utils/local';

export const get = (url) => {
  return axios.get(url,  {
    headers: {
      'access-token': local.getItem('accessToken'),
      'token-type': local.getItem('token-type'),
      client: local.getItem('client'),
      expiry: local.getItem('expiry'),
      uid: local.getItem('uid'),
    },
  });
};

export const post = (url, data = '', headers = {}) => {
  return axios.post(url, data, {
    headers: {
      'access-token': local.getItem('accessToken'),
      'token-type': local.getItem('token-type'),
      client: local.getItem('client'),
      expiry: local.getItem('uid'),
      uid: local.getItem('uid'),
    },
  });
};

export const patch = (url, data = '') => {
  return axios.patch(url, data, {
    headers: {
      'access-token': local.getItem('accessToken'),
      'token-type': local.getItem('token-type'),
      client: local.getItem('client'),
      expiry: local.getItem('uid'),
      uid: local.getItem('uid'),
    },
  });
};

export const put = (url, data = '') => {
  return axios.put(url, data, {
    headers: {
      'access-token': local.getItem('accessToken'),
      'token-type': local.getItem('token-type'),
      client: local.getItem('client'),
      expiry: local.getItem('uid'),
      uid: local.getItem('uid'),
    },
  });
};
