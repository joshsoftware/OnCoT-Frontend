import { BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";
import { Provider } from "react-redux";

import { Button } from "core-components";
import { store } from "store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Container className="text-center">
        <BrowserRouter>
          <Button>basic setup</Button>
        </BrowserRouter>
      </Container>
    </Provider>
  );
}

export default App;
