import axios from 'axios';

export const adminLoginPostApi = () => {
  return axios.get('https://oncot-apis.herokuapp.com/rules/1');
};
