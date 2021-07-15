import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateTimer, timerRequest } from 'actions/timerActions';
import {
  getCurrentTime,
  ifSufficientTime,
} from 'utils/helpers/HeaderIdeHelper';
import {
  setCode,
  setLanguageSelected,
} from 'actions/languageAction';
import HeaderIDE from 'shared-components/Header/HeaderIDE';
import { ROUTES, CANDIDATE_ROUTES } from 'constants/routeConstants';
import { Button } from 'core-components';
import { statementRequest, statementActiveIndex } from 'actions/problemStatementActions';

const HeaderIDEConatiner = () => {
  const { activeIndex, statement } = useSelector((state) => state.problemStatementReducer);
  const { languages } = useSelector((state) => state.languageReducer);
  const totalProblems = statement.length;
  const currentProblem = activeIndex;

  const drive = useSelector((state) => state.userDriveReducer);
  const { name } = drive.data;
  const organisationName = name;

  const dispatch = useDispatch();
  const history = useHistory();

  const result = useSelector((state) => state.TimerReducer);
  const nextProblemSwitch = () => {
    dispatch(statementActiveIndex(currentProblem + 1));
    dispatch(setCode('', currentProblem + 1));
    dispatch(setLanguageSelected(languages[0]));
  };

  const prevProblemSwitch = () => {
    dispatch(statementActiveIndex(currentProblem - 1));
    dispatch(setCode('', currentProblem - 1));
    dispatch(setLanguageSelected(languages[0]));
  };

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
        nextProblemSwitch={nextProblemSwitch}
        prevProblemSwitch={prevProblemSwitch}
      />
    </>
  );
};

export default React.memo(HeaderIDEConatiner);
