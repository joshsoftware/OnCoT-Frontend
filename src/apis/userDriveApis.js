import request from 'apis/apiHelper';

const driveDetail = (token) => request.get(`/api/v1/drives/${token}`);

export default driveDetail;
