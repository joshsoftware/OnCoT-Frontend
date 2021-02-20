import { Button } from "core-components";
import "App.css";

function LandingPageComponent() {
  return (
    <div className="overview-block text-center text-white">
      <h3 className="mt-5">Welcome to</h3>
      <h1
        className="font-weight-bolder"
        style={{
          fontSize: 65,
          fontFamily: "Montserrat",
          color: "#218838",
        }}
      >
        OnCot
      </h1>
      <h4 className="my-5">Your test will start on 11th Feb at 10.00 AM.</h4>
      <div>
        <Button
          className="px-5"
          size="lg"
          style={{ backgroundColor: "#218838" }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default LandingPageComponent;
