import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RulesComponent from 'components/RulesComponent';
import { rulesRequest } from 'actions/rulesAction';

const RulesContainer = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.rulesReducer);
  const {
    userlist: { description },
    errorMessage,
    isError,
  } = result;
  const {
    data: { id },
  } = useSelector((state) => state.userDriveReducer);

  useEffect(() => {
    dispatch(rulesRequest(id));
  }, [dispatch]);

  return (
    <RulesComponent
      isError={isError}
      errorMessage={errorMessage}
      description={description}
    />
  );
};

export default React.memo(RulesContainer);