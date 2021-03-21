import axios from 'axios';
import request from 'apis/apiHelper';
import { CUSTOM_IO_API, CUSTOM_IO_DATA_API } from 'constants/appConstants';

import local from 'utils/local';

const driveId = local.getItem('driveId');
// export const customInputOutputPostApi = (data) => axios.post(CUSTOM_IO_API, data);
export const customInputOutputPostApi = (data) => axios.post(`${CUSTOM_IO_API}`, data);

export const customInputOutputSendTokenApi = (token) => {
  return request.get(`${CUSTOM_IO_DATA_API}/${token}`);
};
