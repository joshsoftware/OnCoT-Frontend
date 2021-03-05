import request from 'apis/apiHelper';

export const getRules = () => request.get('/rulesList');
