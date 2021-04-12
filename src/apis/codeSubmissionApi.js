import request from 'apis/apiHelper';

export const codeSubmissionPostApi = (data) => request.post('submissions', data);
