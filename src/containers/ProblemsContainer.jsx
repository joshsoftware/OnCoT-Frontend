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
  const { statement, requestError } = result;
  const errorMessage = 'Something Went wrong';

  useEffect(() => {
    dispatch(statementRequest(id));
  }, [dispatch]);

  return requestError ? (
    <ProblemsComponent data={errorMessage} />
  ) : (
    <ProblemsComponent data={statement} />
  );
};

export default React.memo(ProblemsContainer);
