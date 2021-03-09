import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from 'root/Routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
