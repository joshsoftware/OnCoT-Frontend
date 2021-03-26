import request from 'apis/apiHelper';

export const finishTestApi = (data) => {
  const { id, candidate_id } = data;
  return request.get(`candidates/${candidate_id}/results/${id}`);
};
