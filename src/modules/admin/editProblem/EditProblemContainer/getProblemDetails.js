import { get } from 'redux/admin/apiHelper';

import { Alert } from 'core-components';

import { SERVER_URL } from 'constants/appConstants';
import local from 'utils/local';

export const getProblem = async () => {
  const problemId = localStorage.getItem('editProblemId');
  const problems = await get(`${SERVER_URL}admin/problems/${problemId}`)
    .then((response) => {
      return response.data.data.problem;
    })
    .catch((error) => {
      return <Alert className='danger'> {error} </Alert>;
    });

  const customData = {
    problems,
    problemLoading: false,
  };
  return customData;
};

export const getTestCases = async () => {
  const problemId = localStorage.getItem('editProblemId');
  const testCases = await get(`${SERVER_URL}admin/problem/${problemId}/test_cases`)
    .then((response) => {
      return response.data.data.test_cases;
    })
    .catch((error) => {
      return <Alert className='danger'> {error} </Alert>;
    });

  const customData = {
    testCases,
    testCasesLoading: false,
  };
  return customData;
};
