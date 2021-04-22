import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TestEndPageComponent from 'components/TestEndPageComponent';
import { finishTestRequest } from 'actions/finishTestActions';
import local from 'utils/local';

const TestEndPageContainer = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.finishTestReducer);

  const { candidateId } = useSelector(
    (state) => state.userDriveReducer,
  );

  const { statement: { id } } = useSelector(
    (state) => state.problemStatementReducer,
  );

  const driveID = local.getItem('driveID');

  useEffect(() => {
    const obj = {
      id,
      candidateId,
      driveID,
    };
    dispatch(finishTestRequest(obj));
  }, [dispatch]);
  return (
    <TestEndPageComponent
      isLoading={isLoading}
    />
  );
};

export default React.memo(TestEndPageContainer);
