import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProblemsComponent from 'components/ProblemsComponent';
import { statementRequest } from 'actions/problemStatementActions';

const ProblemsContainer = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.problemStatementReducer);

  // let data = result.statement.str;
  const { statement: { str: data }, requestError } = result;
  let flag = false;

  useEffect(() => {
    dispatch(statementRequest());
  }, [dispatch]);

  if (requestError) {
    flag = true;
  }

  return (
    flag
      ? <ProblemsComponent data={requestError} />
      : <ProblemsComponent data={data} />
  );
};

export default ProblemsContainer;
