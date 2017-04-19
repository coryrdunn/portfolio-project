import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, hashHistory} from 'react-router';
import './index.css';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route exact path='/' component={App} />
      <Route exact path='/about' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/contact' component={Contact} />
  </Router>,
  document.getElementById('root')
);
