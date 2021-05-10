import { SERVER_URL } from 'constants/appConstants';
import { put } from '../apiHelper';

export const editProblemPutApi = (data) => {
  const problem_id = localStorage.getItem('editProblemId');
  return put(`${SERVER_URL}admin/problems/${problem_id}`, data);
};
