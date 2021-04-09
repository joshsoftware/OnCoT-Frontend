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

  // const renderRulesList = useMemo(() => {
  //   return userlist.rules.map((val, index) => {
  //     console.log(val);
  //     const {
  //       type_name,
  //       description,
  //     } = val;
  //     return (
  //       <h1>hi</h1>
  //       // <li key={type_name}>
  //       //   <td>{description}</td>
  //       //   <td>{score}</td>
  //       //   <td>{end_times}</td>
  //       // </tr>
  //     );
  //   });
  // }, []);
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
