import request from 'apis/apiHelper';

export const finishTestApi = (data) => {
  const { id, candidate_id } = data;
  return request.get(`api/v1/candidates/${candidate_id}/results/${id}`);
};
