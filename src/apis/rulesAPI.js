import RULES_LIST_URL from "constants/appConstants"
const axios = require('axios').default;

const getRules = () => {
   return axios.get(`${RULES_LIST_URL}/rulesList`);
}

export default getRules;