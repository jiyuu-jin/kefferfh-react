/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Home from './Home';
import ExampleComponent from './ExampleComponent';

import {
    BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = () => ({
  render() {
    return (
      <header className="header light-blue darken-4 z-depth-1">
        <img alt="KefferFH" className="" src="/images/logo.png" />
        <nav className="light-blue darken-4">
          <div className="nav-wrapper">
            <ul className="hide-on-med-and-down">
              <li>
                <Link to="/prices">Price Lists</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/florists">Local Florists</Link>
                <Link to="/about">About</Link>
              </li>
            </ul>

            <ul id="nav-mobile" className="side-nav" />
            <a data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>
      </header>
    );
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div id="page-content" className="thebackground">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/example" component={ExampleComponent} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
