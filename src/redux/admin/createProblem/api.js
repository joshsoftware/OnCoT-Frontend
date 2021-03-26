import axios from 'axios';
import local from 'utils/local';

export const createProblemPostApi = (data) => {
  return axios({
    method: 'post',
    url: 'https://oncot-platform.herokuapp.com/api/v1/admin/problems',
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
