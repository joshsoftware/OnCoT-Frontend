import axios from 'axios';
import local from 'utils/local';

export const postTestCaseApi = (data) => {
  return axios({
    method: 'POST',
    url: 'https://oncot-platform.herokuapp.com/api/v1/admin/test_cases',
    data,
    headers: {
      'Content-Type': 'application/json',
      'access-token': local.getItem('accessToken'),
      'token-type': local.getItem('token-type'),
      client: local.getItem('client'),
      expiry: local.getItem('expiry'),
      uid: local.getItem('uid') },
  });
};

export const getTestCasesApi = (data) => {
  return axios({
    method: 'GET',
    url: `https://oncot-platform.herokuapp.com/api/v1/admin/problem/${data.problem_id}/test_cases`,
    headers: {
      'Content-Type': 'application/json',
      'access-token': local.getItem('accessToken'),
      'token-type': local.getItem('token-type'),
      client: local.getItem('client'),
      expiry: local.getItem('expiry'),
      uid: local.getItem('uid') },
  });
};

// api is not yet finalised
export const updateTestCaseApi = (data) => {
  return axios({
    method: 'PUT',
    // /api/v1/admin/test_cases/:test_case_id
    url: `https://oncot-platform.herokuapp.com/api/v1/admin/test_cases/${data.id}`,
    data,
    headers: {
      'Content-Type': 'application/json',
      'access-token': local.getItem('accessToken'),
      'token-type': local.getItem('token-type'),
      client: local.getItem('client'),
      expiry: local.getItem('expiry'),
      uid: local.getItem('uid') },
  });
};
// api is not yet finalised
export const deleteTestCaseApi = (data) => {
  return axios({
    method: 'DELETE',
    url: 'https://oncot-platform.herokuapp.com/api/v1/admin/test_cases',
    data,
    headers: {
      'Content-Type': 'application/json',
      'access-token': local.getItem('accessToken'),
      'token-type': local.getItem('token-type'),
      client: local.getItem('client'),
      expiry: local.getItem('expiry'),
      uid: local.getItem('uid') },
  });
};
