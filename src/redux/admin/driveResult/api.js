import request from 'apis/apiHelper';
import local from 'utils/local';
import { SERVER_URL } from 'constants/appConstants';

export const driveResultGetApi = (page) => {
  const driveId = local.getItem('driveResultId');
  return request.get(`${SERVER_URL}drives/${driveId}/results?page=${page}`);
};
