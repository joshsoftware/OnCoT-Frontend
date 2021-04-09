import request from 'apis/apiHelper';
import local from 'utils/local';

export const getTimer = () => {
  const driveId = local.getItem('driveID');
  const candidateId = local.getItem('candidateId');
  return request.get(`drives/${driveId}/candidates/${candidateId}/candidate_test_time_left`);
};
