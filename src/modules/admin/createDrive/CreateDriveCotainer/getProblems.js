import { get } from 'redux/admin/apiHelper';

import { Alert } from 'core-components';

import { SERVER_URL } from 'constants/appConstants';

const getProblems = async () => {
  const problems = await get(`${SERVER_URL}admin/problems_list`)
    .then((response) => {
      return response.data.data.problems;
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
