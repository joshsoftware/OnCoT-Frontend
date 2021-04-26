import { get } from 'redux/admin/apiHelper';

import { SERVER_URL } from 'constants/appConstants';

export const getProblemDetailsAPI = (id) => get(`${SERVER_URL}admin/problems/${id}`);

export const getTestApi = (id) => get(`${SERVER_URL}admin/problem/${id}/test_cases`);
