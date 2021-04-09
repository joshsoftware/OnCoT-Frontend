import { Alert } from 'core-components';

import { get } from 'redux/admin/apiHelper';

import { SERVER_URL } from 'constants/appConstants';

const getCandidates = async (id) => {
  console.log(id);
  let candidateLoading = false;
  const candidates = await get(`${SERVER_URL}api/v1/admin/drives/${id}/candidate_list`)
    .then((response) => {
      candidateLoading = false;
      console.log(response.data.data.candidates);
      return response.data.data.candidates;
    })
    .catch((error) => {
      candidateLoading = true;
      return <Alert className='danger'> {error} </Alert>;
    });

  const customData = {
    candidates,
    candidateLoading,
  };
  return customData;
};

export default getCandidates;
