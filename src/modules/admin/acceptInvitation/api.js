import axios from 'axios';
import { SERVER_URL } from 'constants/appConstants';

export const acceptInvitationPutApi = async (data) => {
  return axios.put(`${SERVER_URL}accept_invite`, data);
};
