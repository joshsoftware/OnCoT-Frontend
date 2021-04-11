import { get } from 'redux/admin/apiHelper';

import { Alert } from 'core-components';

const getCandidates = async (id) => {
  const candidates = await get(
    `https://oncot-apis.herokuapp.com/api/v1/admin/drives/${id}/candidate_list`,
  )
    .then((response) => {
      return response.data.data.candidates;
    })
    .catch((error) => {
      return <Alert className='danger'> {error} </Alert>;
    });

  return candidates;
};

export default getCandidates;
