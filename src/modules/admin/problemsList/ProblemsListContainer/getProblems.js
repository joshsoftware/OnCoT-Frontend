import { get } from 'redux/admin/apiHelper';

import { Alert } from 'core-components';

import { SERVER_URL } from 'constants/appConstants';

const getProblems = async (page) => {
  const problems = await get(`${SERVER_URL}admin/problems?page=${page}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return <Alert className='danger'> {error} </Alert>;
    });

  const customData = {
    problems,
    problemIsLoading: false,
  };
  return customData;
};

export default getProblems;
