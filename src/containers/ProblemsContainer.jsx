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
    requestError,
  } = result;

  useEffect(() => {
    dispatch(statementRequest(id));
  }, [dispatch]);

  return (
    <ProblemsComponent
      error={requestError}
      title={title}
      description={description}
    />
  );
};

export default React.memo(ProblemsContainer);
