import axios from 'axios';
import local from 'utils/local';
import { SERVER_URL } from 'constants/appConstants';
import { get, post, put } from 'redux/admin/apiHelper';

export const postRuleApi = (data) => {
  return post(`${SERVER_URL}admin/rules`, data);
};

export const getRulesApi = (data) => {
  return get(`${SERVER_URL}admin/default_rules`);
};

export const updateRuleApi = (data) => {
  return put(`${SERVER_URL}admin/rules/${data.id}`, data);
};

export const deleteRuleApi = (data) => {
  return axios.delete(`${SERVER_URL}admin/rules/${data}`, {
    headers: {
      'access-token': local.getItem('accessToken'),
      'token-type': local.getItem('token-type'),
      client: local.getItem('client'),
      expiry: local.getItem('expiry'),
      uid: local.getItem('uid'),
    },
  });
};
