const axios = require('axios').default;

const getStatement = () => {
   return axios.get('http://localhost:3000/statementsList');
}

export default getStatement;