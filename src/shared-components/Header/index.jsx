import React, { useEffect, useReducer } from 'react';
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

import { setSubmissionAllowed } from 'actions/codeSubmissionActions';
import HeaderIDE from 'shared-components/Header/HeaderIDE';
import { ROUTES, CANDIDATE_ROUTES } from 'constants/routeConstants';
import local from 'utils/local';
import { Button } from 'core-components';
import { statementRequest, statementActiveIndex } from 'actions/problemStatementActions';
import { saveCode } from 'actions/codeBackupAction';
import { clearIO } from 'actions/ioAction';

const HeaderIDEConatiner = () => {
  const { activeIndex, statement } = useSelector((state) => state.problemStatementReducer);
  const { languages, code, languageSelected } = useSelector((state) => state.languageReducer);

  const totalProblems = statement.length;
  const currentProblem = activeIndex;
  const languageId = languageSelected.id;
  const { id: problemId } = statement[activeIndex - 1] || { problem_id : null };

  const { candidateId } = useSelector((state) => state.userDriveReducer);
  const driveID = local.getItem('driveID');
  const drive = useSelector((state) => state.userDriveReducer);
  const { name } = drive.data;
  const organisationName = name;

  const dispatch = useDispatch();
  const history = useHistory();

  const result = useSelector((state) => state.TimerReducer);

  const codeBackup = () => {
    if (
      code != null &&
      code &&
      languageId != null &&
      problemId != null &&
      candidateId != null &&
      driveID != null
    ) {
      const obj = {
        code,
        languageId,
        problemId,
        candidateId,
        driveID,
      };
      dispatch(saveCode(obj));
    }
  };

  const nextProblemSwitch = () => {
    const { submission_count: submissionCount }
    = statement[currentProblem] || { problem_id : null };
    codeBackup();
    dispatch(statementActiveIndex(currentProblem + 1));
    dispatch(setCode(''));
    dispatch(setLanguageSelected(languages[0]));
    dispatch(setSubmissionAllowed(submissionCount));
    dispatch(clearIO());
  };

  const prevProblemSwitch = () => {
    const { submission_count: submissionCount }
    = statement[currentProblem - 2] || { problem_id : null };
    codeBackup();
    dispatch(statementActiveIndex(currentProblem - 1));
    dispatch(setCode(''));
    dispatch(setLanguageSelected(languages[0]));
    dispatch(setSubmissionAllowed(submissionCount));
    dispatch(clearIO());
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
