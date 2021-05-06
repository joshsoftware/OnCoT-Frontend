import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import LandingPageComponent from 'components/LandingPageComponent';
import { driveDetailRequest } from 'actions/userDriveActions';

import { ROUTES, CANDIDATE_ROUTES } from 'constants/routeConstants';
import { driveTimerRequest, updateDriveTimer } from 'actions/driveTimerActions';
import { getCurrentTime } from 'utils/helpers/HeaderIdeHelper';

function LandingPageContainer() {
  const { id: tokenId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const userDriveState = useSelector((state) => state.userDriveReducer);
  const {
    data: { startTime, endTime, name },
    isError,
    errorMessage,
    isLoading,
  } = userDriveState;

  useEffect(() => {
    dispatch(driveDetailRequest(tokenId));
  }, [dispatch, tokenId]);

  const handleClick = useCallback(() => {
    history.push(ROUTES.CANDIDATE + CANDIDATE_ROUTES.RULES_AND_PROFILE);
  }, [history]);

  const result = useSelector((state) => state.DriveTimerReducer);

  useEffect(() => {
    dispatch(driveTimerRequest(tokenId));
  }, []);

  const data = {
    data: Math.max(0, result.counter - 1),
    is_live: result.isLive,
  };
  useEffect(() => {
    setTimeout(() => {
      if (result.counter >= 0 && result.isLive === true) {
        dispatch(updateDriveTimer(data));
      }
    }, 1000);
  }, [result.counter, result.isLive]);

  const driveTime = getCurrentTime(result.counter);

  return (
    <LandingPageComponent
      startTime={startTime}
      endTime={endTime}
      name={name}
      isError={isError}
      errorMessage={errorMessage}
      isLoading={isLoading}
      handleClick={handleClick}
      counter={result.counter}
      isLive={result.isLive}
      driveTime={driveTime}
    />
  );
}

export default React.memo(LandingPageContainer);
