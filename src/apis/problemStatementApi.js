import request from 'apis/apiHelper';

export const getStatement = (driveId) => request.get(`/problems/${driveId}`);
