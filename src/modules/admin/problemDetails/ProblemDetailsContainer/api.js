import { Alert } from 'core-components';

import { get } from 'redux/admin/apiHelper';

import { SERVER_URL } from 'constants/appConstants';

export const getTestCases = async () => {
  let testLoading = false;
  const testcase = await get(
    `${SERVER_URL}admin/problem/19/test_cases`,
  )
    .then((response) => {
      return response.data.data.test_cases;
    })
    .catch((error) => {
      testLoading = true;

      return <Alert className='danger'> {error} </Alert>;
    });

  const customData = {
    testcase,
    testLoading,
  };
  return customData;
};

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
