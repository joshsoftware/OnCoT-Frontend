import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProblemsComponent from 'components/ProblemsComponent';
import { statementRequest } from 'actions/problemStatementActions';

const ProblemsContainer = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.problemStatementReducer);
  const {
    data: { id },
  } = useSelector((state) => state.userDriveReducer);
  const {
    statement: { title, description },
    errorMessage,
    isError,
    isLoading,
  } = result;

  useEffect(() => {
    dispatch(statementRequest(id));
  }, [dispatch]);
  return (
    <ProblemsComponent
      isError={isError}
      errorMessage={errorMessage}
      title={title}
      description={description}
      isLoading={isLoading}
    />
  );
};

export default React.memo(ProblemsContainer);
