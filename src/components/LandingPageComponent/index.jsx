import moment from "moment";

import { Button, Alert } from "core-components";
import Loading from "shared-components/Loading";

function LandingPageComponent(props) {
  const { startTime, isError, errorMessage, isLoading, handleClick } = props;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="overview-block text-center text-white">
        <Alert color="danger">{errorMessage}</Alert>
      </div>
    );
  }

  return (
    <div className="overview-block text-center text-white">
      <h3 className="mt-5">Welcome to</h3>
      <h1 className="font-weight-bolder" id="title">
        OnCoT
      </h1>
      <h4 className="my-5">{`Your test will start on ${moment(startTime).format(
        "LLL"
      )}`}</h4>
      <div>
        <Button className="px-5" size="lg" onClick={handleClick}>
          Continue
        </Button>
      </div>
    </div>
  );
}

export default LandingPageComponent;
