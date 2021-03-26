import request from 'apis/apiHelper';

export const finishTestApi = (data) => {
  const { id, candidate_id } = data;
  request.get(`/results/${id}/${candidate_id}`);
};
