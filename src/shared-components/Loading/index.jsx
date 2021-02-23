import { Spinner } from "core-components";

function Loading() {
  return (
    <div className="overview-block text-danger d-flex justify-content-center align-items-center ">
      <div>
        <Spinner color="success" />
      </div>
    </div>
  );
}

export default Loading;
