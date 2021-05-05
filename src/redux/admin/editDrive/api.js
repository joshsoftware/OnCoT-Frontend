import axios from 'axios';
import local from 'utils/local';
import { SERVER_URL } from 'constants/appConstants';

export const editDrivePutApi = (data) => {
  const driveId = local.getItem('editDriveId');
  return axios({
    method: 'put',
    url: `${SERVER_URL}admin/drives/${driveId}`,
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
