import request from 'apis/apiHelper';

export const customInputOutputPostApi = (data) => request.post('/token', data);

export const customInputOutputSendTokenApi = (token) => request.get(`/submission/${token}`);
