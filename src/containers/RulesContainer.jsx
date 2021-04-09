import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RulesComponent from 'components/RulesComponent';
import { rulesRequest } from 'actions/rulesAction';

const RulesContainer = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.rulesReducer);
  const {
    userlist,
    errorMessage,
    isError,
    isLoading,
  } = result;
  const user = useSelector((state) => state.userDriveReducer);
  const { id } = user.data;

  useEffect(() => {
    dispatch(rulesRequest(id));
  }, [dispatch]);

  const renderList = useMemo(() => {
    return userlist.map((val) => {
      return (
        <li>
          {val.description}
        </li>
      );
    });
  });

  return (
    <RulesComponent
      isError={isError}
      errorMessage={errorMessage}
      isLoading={isLoading}
      renderList={renderList}
    />
  );
};

export default React.memo(RulesContainer);
