import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, browserHistory} from 'react-router';
import './index.css';

ReactDOM.render(
  <ROUTER history={browserHistory}>
    <ROUTE path='/' component={APP} />
  </ROUTER>,
  document.getElementById('root')
);
