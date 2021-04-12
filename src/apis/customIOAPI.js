import request from 'apis/apiHelper';

export const customInputOutputPostApi = (data) => request.post('executions/submission_token', data);

export const customInputOutputSendTokenApi = (token) => request.get(`executions/${token}/submission_status`);
