import axios from 'axios';
import { SERVER_URL } from 'constants/appConstants';
import { get, post, put } from '../apiHelper';

const headers = {};
export const postTestCaseApi = (data) => {
  // return post(`${SERVER_URL}api/v1/admin/test_cases`, data);
  return post(`${SERVER_URL}api/v1/admin/test_cases`, data);
};

export const getTestCasesApi = (data) => {
  return get(`${SERVER_URL}api/v1/admin/problem/${data.problem_id}/test_cases`);
};

export const updateTestCaseApi = (data) => {
  return put(`${SERVER_URL}api/v1/admin/test_cases/${data.id}`, data);
};

// api is not yet finalised
export const deleteTestCaseApi = (data) => {
  return axios({
    method: 'DELETE',
    url: 'https://oncot-platform.herokuapp.com/api/v1/admin/test_cases',
    data,
    headers,
  });
};
