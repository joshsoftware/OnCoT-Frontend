import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateTimer, timerRequest } from 'actions/timerActions';
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

  const hours = Math.floor((result.counter / (60 * 60)) % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const minutes = Math.floor((result.counter / (60)) % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const seconds = Math.floor(result.counter % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 });

  let time;

  if (hours <= 0 && minutes <= 0 && seconds <= 0) {
    time = 'Expired';
  } else {
    time = `${hours}:${minutes}:${seconds}`;
  }

  return (
    <>
      {result.counter >= 0 && (
      <HeaderIDE
        totalProblems={totalProblems}
        currentProblem={currentProblem}
        organisationName={organisationName}
        time={time}
      />
      )}
    </>
  );
};

export default HeaderIDEConatiner;
