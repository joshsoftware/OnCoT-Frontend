import { useCallback, useEffect, useState } from 'react';
import getProblemDetails from  'modules/admin/problemDetails/ProblemDetailsContainer/api';
import local from 'utils/local';
import ProblemDetailsComponent from 'modules/admin/problemDetails/ProblemDetailsComponent';
import { Card, CardBody, CardHeader, Spinner } from 'core-components';

const ProblemDetailsContainer = () => {
  const [problemDetails, setProblemDetails] = useState();
  const [problemIsLoading, setProblemIsLoading] = useState(true);

  useEffect(async () => {
    const data = await getProblemDetails();
    const { candidateLoading, problem } = data;
    setProblemDetails(problem);
    setProblemIsLoading(candidateLoading);
  }, [problemIsLoading]);

  const renderProblemDetails = useCallback(() => {
    if (typeof problemDetails === 'undefined') {
      return <Spinner />;
    }
    return (
      <Card className='w-50 border-0 shadow'>
        <CardHeader className='bg-dark text-white'>{problemDetails.problem.title}</CardHeader>
        <CardBody>
          <h6>Id: {problemDetails.problem.id}</h6>
          <h6>Description: {problemDetails.problem.description}</h6>
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
