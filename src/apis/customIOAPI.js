import request from 'apis/apiHelper';

export const customInputOutputPostApi = (data) => request.post('api/v1/executions/submission_token', data);

export const customInputOutputSendTokenApi = (token) => request.get(`api/v1/executions/${token}/submission_status`);
