import axios from 'axios';

const codeSubmissionPostApi = (data) => {
  return axios.post('https://api.mocki.io/v1/230fa52b', data);
};

export default codeSubmissionPostApi;
