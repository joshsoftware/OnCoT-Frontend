import request from 'apis/apiHelper';
import { SERVER_URL } from 'constants/appConstants';
import local from 'utils/local';

export const getDriveTimer = () => {
  const driveId = local.getItem('driveID');
  return request.get(`${SERVER_URL}drives/${driveId}/drive_time_left`);
};
