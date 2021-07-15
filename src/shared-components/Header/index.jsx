import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateTimer, timerRequest } from 'actions/timerActions';
import {
  getCurrentTime,
  ifSufficientTime,
} from 'utils/helpers/HeaderIdeHelper';
import HeaderIDE from 'shared-components/Header/HeaderIDE';
import { ROUTES, CANDIDATE_ROUTES } from 'constants/routeConstants';
import { Button } from 'core-components';

const HeaderIDEConatiner = () => {
  const totalProblems = 1;
  const currentProblem = 1;

  const drive = useSelector((state) => state.userDriveReducer);
  const { name } = drive.data;
  const organisationName = name;

  const dispatch = useDispatch();
  const history = useHistory();

  const result = useSelector((state) => state.TimerReducer);

  useEffect(() => {
    dispatch(timerRequest());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (result.counter >= 0) {
        dispatch(updateTimer(Math.max(0, result.counter - 1)));
      }
    }, 1000);
  }, [result.counter]);

  const time = getCurrentTime(result.counter);
  const sufficient = ifSufficientTime(result.counter);

  if (time === 'Expired' && result.isRendered) {
    history.push(ROUTES.CANDIDATE + CANDIDATE_ROUTES.ENDPAGE);
  }

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
