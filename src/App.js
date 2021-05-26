import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'store';
import Routes from 'root/Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';

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
