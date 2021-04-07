import request from 'apis/apiHelper';
import { SERVER_URL } from 'constants/appConstants';
import { useSelector } from 'react-redux';
import local from 'utils/local';

export const getTimer = () => {
  const driveId = local.getItem('driveId');
  const candidateId = local.getItem('candidateId');
  return request.get(
    `${SERVER_URL}drives/${driveId}/candidates/${candidateId}/candidate_test_time_left`,
  );
};
