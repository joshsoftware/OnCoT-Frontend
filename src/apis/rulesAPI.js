const axios = require('axios').default;

const getRules = () => {
   return axios.get('  http://localhost:3002/rulesList');
}

export default getRules;