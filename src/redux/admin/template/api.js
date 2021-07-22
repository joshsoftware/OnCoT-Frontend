import { SERVER_URL } from 'constants/appConstants';
import { put, get } from '../apiHelper';

export const templateGetApi = (data) => {
  const problem_id = localStorage.getItem('templateProblemId');
  return get(`${SERVER_URL}admin/templates`, data);
};

export const templatePostApi = (data) => {
  return put(`${SERVER_URL}admin/templates`, data);
};
