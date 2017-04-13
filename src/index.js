import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, browserHistory} from 'react-router';
import './index.css';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/resume' component={Resume} />
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);
