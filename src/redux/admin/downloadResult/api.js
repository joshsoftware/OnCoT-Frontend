import axios from 'axios';
import local from 'utils/local';
import { SERVER_URL } from 'constants/appConstants';

export const downloadResultApi = (data) => {
  const driveId = local.getItem('driveResultId');
  return axios({
    method: 'get',
    url: `${SERVER_URL}drives/${driveId}/results/csv_result.csv`,
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
