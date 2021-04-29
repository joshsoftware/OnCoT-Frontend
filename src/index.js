import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.oncontextmenu = function (e) {
  if (e.button === 2) {
    e.preventDefault();
    return false;
  }
};

axios.interceptors.request.use((request) => {
  return request;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.message === 'Request failed with status code 401') {
      window.location = '/admin/login';
    }
    return error;
  },
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
