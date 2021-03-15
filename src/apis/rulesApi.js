import request from 'apis/apiHelper';

export const getRules = (driveID) => request.get(`/rules/${driveID}`);
