import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import LandingPageComponent from 'components/LandingPageComponent';
import { driveDetailRequest } from 'actions/userDriveActions';

import { ROUTES, CANDIDATE_ROUTES } from 'constants/routeConstants';

function LandingPageContainer() {
  const { id: tokenId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const userDriveState = useSelector((state) => state.userDriveReducer);
  const {
    data: { startTime },
    isError,
    errorMessage,
    isLoading,
  } = userDriveState;

  useEffect(() => {
    dispatch(driveDetailRequest(tokenId));
  }, [dispatch, tokenId]);

  const handleClick = useCallback(() => {
    history.push(ROUTES.CANDIDATE + CANDIDATE_ROUTES.IDE);
  }, [history]);

  return (
    <LandingPageComponent
      startTime={startTime}
      isError={isError}
      errorMessage={errorMessage}
      isLoading={isLoading}
      handleClick={handleClick}
    />
  );
}

export default React.memo(LandingPageContainer);
