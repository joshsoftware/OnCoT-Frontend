import SERVER_URL from "constants/appConstants";
const axios = require('axios').default;

const getStatement = () => {
   return axios.get(`${SERVER_URL}/statementsList`);
}

export default getStatement;