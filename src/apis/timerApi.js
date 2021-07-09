import request from 'apis/apiHelper';
import local from 'utils/local';

export const getTimer = () => {
  const driveId = local.getItem('driveID');
  const candidateId = local.getItem('candidateId');
  const authToken = local.getItem('authToken');
  return request.get(`drives/${driveId}/candidates/${candidateId}/candidate_test_time_left/${authToken}`);
};
