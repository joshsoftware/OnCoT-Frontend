import axios from 'axios';
import { CUSTOM_IO_API } from 'constants/appConstants';

export const customInputOutputPostApi = (data) => axios.post(CUSTOM_IO_API, data);

export const customInputOutputSendTokenApi = (token) => {
  return axios.get(`https://oncot-apis.herokuapp.com/submission/${token}`);
};
