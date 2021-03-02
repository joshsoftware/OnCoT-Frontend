import axios from 'axios';

import { SERVER_URL } from 'constants/appConstants';

const client = axios.create({
  baseURL: SERVER_URL,
});

const get = (path) => client.get(path);

const post = (path, data) => client.post(path, data);

const put = (path, data) => client.put(path, data);

const request = {
  get,
  post,
  put,
};

export default request;
