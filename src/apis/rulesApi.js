import axios from 'axios';

import { RULES_LIST_URL } from 'constants/appConstants';

export const getRules = () => axios.get(`${RULES_LIST_URL}/rulesList`);
