import request from 'apis/apiHelper';

export const getStatement = (driveId) => request.get(`api/v1/drives/${driveId}/problem`);
