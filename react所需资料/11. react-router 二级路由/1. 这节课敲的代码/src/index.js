import React from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './pages/home/Home';
import Activities from './pages/activities/Activities';
import Topics from './pages/topics/Topics';
import Login from './pages/login/Login';

import App from './App';

import './styles/index.css';

render(
  <Router>
    <App>
      <Switch>
        <Route path='/' exact component={ Home }></Route>
        <Route path='/activities' component={ Activities }></Route>
        <Route path='/topics' component={ Topics }></Route>
        <Route path='/login' component={ Login }></Route>
        <Redirect to='/'></Redirect>
      </Switch>
    </App>
  </Router>, 
  document.getElementById('root')
);