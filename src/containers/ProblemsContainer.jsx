import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProblemsComponent from 'components/ProblemsComponent';
import { statementRequest } from 'actions/problemStatementActions';

const ProblemsContainer = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.problemStatementReducer);

  let data = result.statement.str;
  const { requestError } = result;

  if (requestError) {
    data = requestError;
  }

  useEffect(() => {
    dispatch(statementRequest());
  }, [dispatch]);

  return <ProblemsComponent data={data} />;
};

export default ProblemsContainer;
