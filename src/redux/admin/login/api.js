import axios from 'axios';

export const adminLoginPostApi = (data) => {
  return axios.post('https://oncot-platform.herokuapp.com/auth/sign_in', data);
};
