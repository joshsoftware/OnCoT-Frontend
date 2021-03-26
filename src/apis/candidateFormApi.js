import axios from 'axios';
import { CANDIDATE_INFO_API } from 'constants/appConstants';

export const candidateInfoPostApi = (data, token) => {
  return axios.patch(`${CANDIDATE_INFO_API}/${token}`, data);
};
