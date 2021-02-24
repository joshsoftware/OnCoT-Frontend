const axios = require('axios').default;

const getRules = () => {
   return axios.get('http://localhost:3000/rulesList');
}

export default getRules;