import { Alert } from 'core-components';

import { get } from 'redux/admin/apiHelper';

import { SERVER_URL } from 'constants/appConstants';

const getProblemDetails = async () => {
  let candidateLoading = false;
  const problem = await get(
    `${SERVER_URL}admin/problems/19`,
  )
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      candidateLoading = true;

      return <Alert className='danger'> {error} </Alert>;
    });

  const customData = {
    problem,
    candidateLoading,
  };
  return customData;
};

export default getProblemDetails;
