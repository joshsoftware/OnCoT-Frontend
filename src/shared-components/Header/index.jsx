import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateTimer, timerRequest } from 'actions/timerActions';
import { getCurrentTime, ifSufficientTime } from 'utils/helpers/HeaderIdeHelper';
import HeaderIDE from 'shared-components/Header/HeaderIDE';

const HeaderIDEConatiner = () => {
  const totalProblems = 3;
  const currentProblem = 2;
  const organisationName = 'Josh Inc.';

  const dispatch = useDispatch();

  const result = useSelector((state) => state.TimerReducer);

  useEffect(() => {
    dispatch(timerRequest());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (result.counter >= 0) { dispatch(updateTimer(result.counter - 1)); }
    }, 1000);
  }, [result.counter]);

  const time = getCurrentTime(result.counter);
  const sufficient = ifSufficientTime(result.counter);

  return (
    <>
      <HeaderIDE
        totalProblems={totalProblems}
        currentProblem={currentProblem}
        organisationName={organisationName}
        time={time}
        ifSufficient={sufficient}
      />
    </>
  );
};

export default React.memo(HeaderIDEConatiner);
