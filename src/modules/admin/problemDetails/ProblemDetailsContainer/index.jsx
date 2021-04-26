import React, { useCallback, useEffect, useState } from 'react';
import local from 'utils/local';
import ProblemDetailsComponent from 'modules/admin/problemDetails/ProblemDetailsComponent';
import { Alert, Card, CardBody, CardHeader, Spinner, Table } from 'core-components';

import { get } from 'redux/admin/apiHelper';

import { SERVER_URL } from 'constants/appConstants';

const ProblemDetailsContainer = () => {
  const [problemDetails, setProblemDetails] = useState();
  const [problemIsLoading, setProblemIsLoading] = useState(true);

  const [testCases, setTestCases] = useState([]);
  const [testCaseLoading, setTestCaseLoading] = useState(true);

  useEffect(() => {
    const problemId = local.getItem('problemDetailId');

    async function getProblemDetails() {
      try {
        let candidateLoading = false;
        await get(`${SERVER_URL}admin/problems/${problemId}`)
          .then((response) => {
            setProblemDetails(response.data.data);
          })
          .catch((error) => {
            candidateLoading = true;
            setProblemIsLoading(candidateLoading);
            return <Alert className='danger'> {error} </Alert>;
          });
      } catch (e) {
        <Alert color='API Call Failed '> {e}</Alert>;
      }
    }
    getProblemDetails();

    async function getTestCases() {
      try {
        let testLoading = false;
        await get(`${SERVER_URL}admin/problem/${problemId}/test_cases`)
          .then((response) => {
            setTestCases(response.data.data.test_cases);
          })
          .catch((error) => {
            testLoading = true;
            setTestCaseLoading(testLoading);
            return <Alert className='danger'> {error} </Alert>;
          });
      } catch (e) {
        <Alert color='API Call Failed '> {e}</Alert>;
      }
    }
    getTestCases();
  }, [problemDetails, testCases]);

  const renderTestCases = useCallback(() => {
    return testCases.map((val) => {
      const { id, input, output, marks } = val;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{input}</td>
          <td>{output}</td>
          <td>{marks}</td>
        </tr>
      );
    });
  });
  const renderProblemDetails = useCallback(() => {
    if (typeof problemDetails === 'undefined') {
      return <Spinner />;
    }
    return (
      <Card className='w-75 border-0 shadow'>
        <CardHeader className='bg-dark text-white'>{problemDetails.problem.title}</CardHeader>
        <CardBody>
          <h6>Description: {problemDetails.problem.description}</h6>
          <h6>TestCases: </h6>
          <Table dark>
            <thead>
              <tr>
                <th>Id</th>
                <th>Input</th>
                <th>Output</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody className='bg-secondary'>
              { renderTestCases() }
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  });

  return (
    <ProblemDetailsComponent
      renderProblemDetails={renderProblemDetails}
    />
  );
};

export default  React.memo(ProblemDetailsContainer);
