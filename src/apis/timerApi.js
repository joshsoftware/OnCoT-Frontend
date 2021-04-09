import request from 'apis/apiHelper';
import { SERVER_URL } from 'constants/appConstants';
import local from 'utils/local';

export const getTimer = () => {
  const driveId = local.getItem('driveID');
  const candidateId = local.getItem('candidateId');
  return request.get(
    `${SERVER_URL}api/v1/drives/${driveId}/candidates/${candidateId}/candidate_test_time_left`,
  );
};
