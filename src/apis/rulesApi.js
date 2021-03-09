import axios from 'axios';

import { SERVER_URL } from 'constants/appConstants';

export const getRules = () => axios.get(`${SERVER_URL}/rulesList`);
