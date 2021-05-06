import { SERVER_URL } from 'constants/appConstants';
import { get, post, put } from '../apiHelper';

export const postTestCaseApi = (data) => {
  return post(`${SERVER_URL}admin/test_cases`, data);
};

export const getTestCasesApi = (data) => {
  const problem_id = localStorage.getItem('editProblemId');
  return get(`${SERVER_URL}admin/problem/${problem_id}/test_cases`);
};

export const updateTestCaseApi = (data) => {
  return put(`${SERVER_URL}admin/test_cases/${data.id}`, data);
};

export const deleteTestCaseApi = (data) => {
  return put(`${SERVER_URL}admin/test_cases/${data.id}`, data);
};
