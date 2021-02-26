import request from "apis/apiHelper";

const driveDetail = (token) => request.get(`/validate-token/${token}`);

export default driveDetail;
