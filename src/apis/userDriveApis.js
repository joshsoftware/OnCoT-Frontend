import request from 'apis/apiHelper';

const driveDetail = (token) => request.get(`/drives/${token}`);

export default driveDetail;
