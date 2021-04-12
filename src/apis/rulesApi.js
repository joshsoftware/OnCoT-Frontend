import request from 'apis/apiHelper';

export const getRules = (driveID) => request.get(`drives/${driveID}/rules`);
