import request from 'apis/apiHelper';
import local from 'utils/local';

export const getDriveTimer = () => {
  const driveId = local.getItem('driveID');
  return request.get(`drives/${driveId}/drive_time_left`);
};
