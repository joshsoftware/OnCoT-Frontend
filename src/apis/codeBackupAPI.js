import request from 'apis/apiHelper';

export const codeBackupPostApi = (data) => request.post('codes', data);

export const codeBackupGetApi = (token, problem_id) => request.get(`codes/${token}/${problem_id}`);
