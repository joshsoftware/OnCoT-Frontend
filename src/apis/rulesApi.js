import request from 'apis/apiHelper';

export const getRules = (driveID) => request.get(`api/v1/drives/${driveID}/rules`);
