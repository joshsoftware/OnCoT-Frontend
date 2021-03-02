import axios from "axios";
import { SERVER_URL } from "constants/appConstants";

export const getStatement = () => {
   return axios.get(`${SERVER_URL}/statementsList`);
}