import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams, useHistory } from "react-router-dom";

import LandingPageComponent from "components/LandingPageComponent";
import { driveDetailRequest } from "actions/userDriveActions";

function LandingPageContainer() {
  const { id: tokenId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const userDriveState = useSelector((state) => state.userDriveReducer);
  const { startTime, error, errorMessage, loading } = userDriveState;

  const userProfileState = useSelector((state) => state.userProfileReducer);

  useEffect(() => {
    dispatch(driveDetailRequest(tokenId));
  }, [tokenId]);

  if (userProfileState.authToken) {
    return <Redirect to="/ide" />;
  }

  const handleClick = () => {
    history.push("/ide");
  };

  return (
    <LandingPageComponent
      startTime={startTime}
      error={error}
      errorMessage={errorMessage}
      loading={loading}
      handleClick={handleClick}
    />
  );
}

export default LandingPageContainer;
