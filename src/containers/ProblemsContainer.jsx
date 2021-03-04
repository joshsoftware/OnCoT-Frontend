import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProblemsComponent from 'components/ProblemsComponent';
import { statementRequest } from 'actions/problemStatementActions';

const ProblemsContainer = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.problemStatementReducer);
  const { statement: { str: data }, requestError } = result;
  const errorMessage = 'Something Went wrong';

  useEffect(() => {
    dispatch(statementRequest());
  }, [dispatch]);

  return (
    requestError
      ? <ProblemsComponent data={errorMessage} />
      : <ProblemsComponent data={data} />
  );
};

export default React.memo(ProblemsContainer);
