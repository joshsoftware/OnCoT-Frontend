import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TestEndPageComponent from 'components/TestEndPageComponent';
import { finishTestRequest } from 'actions/finishTestActions';

const TestEndPageContainer = () => {
  const dispatch = useDispatch();

  const { score, testTime, isLoading } = useSelector((state) => state.finishTestReducer);

  const { candidateId } = useSelector(
    (state) => state.userDriveReducer,
  );
  const candidate_id = candidateId;

  const { statement: { id } } = useSelector(
    (state) => state.problemStatementReducer,
  );

  useEffect(() => {
    const obj = {
      id,
      candidate_id,
    };
    dispatch(finishTestRequest(obj));
  }, [dispatch]);
  return (
    <TestEndPageComponent
      score={score}
      testTime={testTime}
      isLoading={isLoading}
    />
  );
};

export default React.memo(TestEndPageContainer);
