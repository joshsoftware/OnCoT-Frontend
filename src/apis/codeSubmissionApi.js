import request from 'apis/apiHelper';

export const codeSubmissionPostApi = (data) => request.post('submissions', data);

export const codeSubmissionGetApi = (id) => request.get(`submissions/${id}`);
