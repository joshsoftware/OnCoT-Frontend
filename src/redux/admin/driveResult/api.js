import axios from 'axios';
import local from 'utils/local';

export const driveResultPostApi = (data) => {
  return axios({
    method: 'post',
    url: 'https://oncot-platform.herokuapp.com/',
  });
};
