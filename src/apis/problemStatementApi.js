import request from 'apis/apiHelper';

export const getStatement = () => request.get('/statementsList');
