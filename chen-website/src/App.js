import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Home from './components/home';
import Music from './components/music';
import Contact from './components/contact';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <Router>
      <div id="app">
      <main>
        <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/music'} className="nav-link">Music</Link></li>
        </ul>
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/music" component={Music} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      </div>
      </Router>
  );
  }
}

export default App;
