import axios from 'axios';
import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/Store.js'
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

dotenv.config()

axios.defaults.baseURL = process.env.REACT_APP_API || "http://127.0.0.1:5000";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
