import axios from 'axios';

export const codeSubmissionPostApi = (data) => {
  return axios.post('https://oncot-platform.herokuapp.com/submissions', data);
};
