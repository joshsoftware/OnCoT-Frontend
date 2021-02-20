import { BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";
import { Provider } from "react-redux";

import { store } from "store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "root/Routes";

function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Container>
    </Provider>
  );
}

export default App;
