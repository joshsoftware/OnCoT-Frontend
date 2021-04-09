import request from 'apis/apiHelper';
import local from 'utils/local';
import { SERVER_URL } from 'constants/appConstants';

export const driveResultPostApi = () => {
  const driveId = local.getItem('driveResultId');
  return request.get(`${SERVER_URL}api/v1/drives/${driveId}/results`);
};
