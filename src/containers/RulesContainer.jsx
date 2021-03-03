import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RulesComponent from 'components/RulesComponent';
import { rulesRequest } from 'actions/rulesAction';

const RulesContainer = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.rulesReducer);

  const { userlist : { str : data }, requestError } = result;
  let flag = false;

  useEffect(() => {
    dispatch(rulesRequest());
  }, [dispatch]);

  if (requestError) {
    flag = true;
  }
  return (
    flag
      ? <RulesComponent data={requestError} />
      : <RulesComponent data={data} />
  );
};

export default React.memo(RulesContainer);
