import request from 'apis/apiHelper';

export const finishTestApi = (data) => {
  const { candidate_id } = data;
  return request.put(`drives_candidates/${candidate_id}`);
};
