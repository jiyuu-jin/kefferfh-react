/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Home from './Home';
import ExampleComponent from './ExampleComponent';

import {
    BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div id="page-content" className="thebackground">
            <h1>Test Header</h1>
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
