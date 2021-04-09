import request from 'apis/apiHelper';

export const candidateList = () => request.get(`/candidates`);
