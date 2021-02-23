import axios from "axios";

import { SERVER_URL } from "constants/appConstants";

const driveDetail = (token) => {
  return axios.get(`${SERVER_URL}/token`);
};

export default driveDetail;
