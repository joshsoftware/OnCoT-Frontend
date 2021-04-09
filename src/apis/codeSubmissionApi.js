import request from 'apis/apiHelper';

export const codeSubmissionPostApi = (data) => request.post('api/v1/submissions', data);
