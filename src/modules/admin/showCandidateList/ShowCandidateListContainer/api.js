import { Alert } from 'core-components';

import { get } from 'redux/admin/apiHelper';

import { SERVER_URL } from 'constants/appConstants';

const getCandidates = async (params) => {
  let candidateLoading = false;
  const candidates = await get(
    `${SERVER_URL}admin/drives/${params.Id}/candidate_list?page=${params.currentPageNumber}`,
  )
    .then((response) => {
      return response.data.data;
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
