import axios from 'axios';

import isEmpty from 'utils/isEmpty';

import { SERVER_URL } from 'constants/appConstants';

const client = axios.create({
  baseURL: SERVER_URL,
});

const get = (path) => client.get(path);

const post = (path, data, provision = {}) => {
  let updatedPath = path;

  if (!isEmpty(provision)) {
    let appendPath = '';
    let query;
    Object.entries(provision).forEach(([key, value]) => {
      query = `${key}=${value}`;
      appendPath = `${appendPath + query}&`;
    });
    updatedPath = `${path}?${appendPath}`;
  }
  return client.post(updatedPath, data);
};

const put = (path, data) => client.put(path, data);

const request = {
  get,
  post,
  put,
};

export default request;
