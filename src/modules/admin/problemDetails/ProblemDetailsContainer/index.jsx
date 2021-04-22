import { useCallback, useEffect, useState } from 'react';
import getProblemDetails, { getTestCases } from  'modules/admin/problemDetails/ProblemDetailsContainer/api';
import local from 'utils/local';
import ProblemDetailsComponent from 'modules/admin/problemDetails/ProblemDetailsComponent';
import { Card, CardBody, CardHeader, Spinner, Table } from 'core-components';

const ProblemDetailsContainer = () => {
  const [problemDetails, setProblemDetails] = useState();
  const [problemIsLoading, setProblemIsLoading] = useState(true);

  const [testCases, setTestCases] = useState([]);
  const [testCaseLoading, setTestCaseLoading] = useState(true);

  useEffect(async () => {
    const data = await getProblemDetails();
    const { candidateLoading, problem } = data;
    setProblemDetails(problem);
    setProblemIsLoading(candidateLoading);
    const testCasedata = await getTestCases();
    const { testLoading, testcase } = testCasedata;
    setTestCases(testcase);
    setTestCaseLoading(testLoading);
  }, [problemIsLoading, testCaseLoading]);
  console.log(testCases);

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
      <Card className='w-50 border-0 shadow'>
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

export default ProblemDetailsContainer;
