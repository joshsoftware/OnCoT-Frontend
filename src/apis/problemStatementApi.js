import axios from 'axios';

import { SERVER_URL } from 'constants/appConstants';

export const getStatement = () => axios.get(`${SERVER_URL}/statementsLis`);
