import request from 'apis/apiHelper';
import local from 'utils/local';

export const getDriveTimer = (tokenId) => {
  return request.get(`drives/${tokenId}/drive_time_left`);
};
