import { Alert } from 'core-components';

import { get } from 'redux/admin/apiHelper';

import { SERVER_URL } from 'constants/appConstants';

const getCandidates = async (id) => {
  let candidateLoading = false;
  const candidates = await get(
    `${SERVER_URL}admin/drives/${id}/candidate_list`,
  )
    .then((response) => {
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