import axios from 'axios';
import local from 'utils/local';
import { SERVER_URL } from 'constants/appConstants';

export const sendEmails = (data) => {
  return axios({
    method: 'post',
    url: `${SERVER_URL}api/v1/invite`,
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
export default sendEmails;
