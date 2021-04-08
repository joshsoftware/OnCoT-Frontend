import request from 'apis/apiHelper';

export const driveResultPostApi = () => request.get('http://localhost:3000/data');
