import axios from 'axios';
import local from 'utils/local';
import { SERVER_URL } from 'constants/appConstants';

export const editProblemPutApi = (data) => {
  const problem_id = localStorage.getItem('editProblemId');
  return axios({
    method: 'put',
    url: `${SERVER_URL}admin/problems/${problem_id}`,
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
