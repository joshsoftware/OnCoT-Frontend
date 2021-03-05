import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RulesComponent from 'components/RulesComponent';
import { rulesRequest } from 'actions/rulesAction';

const RulesContainer = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.rulesReducer);
  const {
    userlist: { str: data },
    requestError,
  } = result;
  const errorMessage = 'Something Went Wrong';

  useEffect(() => {
    dispatch(rulesRequest());
  }, [dispatch]);

  return requestError ? (
    <RulesComponent data={errorMessage} />
  ) : (
    <RulesComponent data={data} />
  );
};

export default React.memo(RulesContainer);
