/* eslint-disable react/prefer-stateless-function,jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Prices from './prices';
import Florists from './florists';
import About from './about';
import Caskets from './caskets';
import Containers from './burial-containers';
import Funeral from './funeral';
import Cremation from './cremation';

import ExampleComponent from './ExampleComponent';
import ImmediateBurial from './ImmediateBurial';
import Cards from './cards';

const Header = () => ({

  closeNav() {
    console.log('Closing the sidebar');
    $('.button-collapse').sideNav('hide');
  },

  render() {
    return (
      <header className="header light-blue darken-4 z-depth-1">
        <ul id="dropdown1" className="dropdown-content">
          <li><Link to="/funeral">Funeral</Link></li>
          <li><Link to="/cremation">Cremation</Link></li>
          <li><Link to="/immediate-burial">Immediate Burial</Link></li>
        </ul>
        <Link to="/"><img alt="KefferFH" className="" src="/images/logo.png" />
          <div className="logo-text">AND CREMATORY INC</div>
        </Link>
        <nav className="light-blue darken-4">
          <div className="nav-wrapper">
            <ul className="hide-on-med-and-down">
              <li><Link to="/prices">Price Lists</Link></li>
              <li><Link className="dropdown-button" data-activates="dropdown1" to="/services">Services</Link></li>
              <li><a href="#contact">Contact</a></li>
              <li><Link to="/florists">Local Florists</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <ul onClick={this.closeNav} id="nav-mobile" className="side-nav" >
              <li><Link to="/prices">Price Lists</Link></li>
              <li><Link to="/funeral">Funeral</Link></li>
              <li><Link to="/cremation">Cremation</Link></li>
              <li><Link to="/immediate-burial">Immediate Burial</Link></li>
              <li><a href="#contact">Contact</a></li>
              <li><Link to="/florists">Local Florists</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <a data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>
      </header>
    );
  },

  componentDidMount() {
    $('.dropdown-button').dropdown();
  },
});

const Footer = () => ({
  render() {
    return (
      <footer className="page-footer light-blue darken-4">
        <div className="foot-container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">About Us</h5>
              <p className="grey-text text-lighten-4">Since 1966 the John W. Keffer Funeral Home has offered a professional, dignified service in keeping with individual or family desires with a sincere effort to keep expenses as reasonable as possible.</p>


            </div>
            <div className="col l3 s12" />
            <div className="col l3 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li><a className="white-text" href="#!">Keffer Funeral Home Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Copyright © 2001-2017 John W. Keffer Funeral Home Inc. All Rights Reserved. - Created by <a className="brown-text text-lighten-3" href="http://pelkey.io">Zachary Pelkey</a>
          </div>
        </div>
      </footer>
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
              <Route path="/prices" component={Prices} />
              <Route path="/florists" component={Florists} />
              <Route path="/about" component={About} />
              <Route path="/caskets" component={Caskets} />
              <Route path="/containers" component={Containers} />
              <Route path="/funeral" component={Funeral} />
              <Route path="/cremation" component={Cremation} />
              <Route path="/immediate-burial" component={ImmediateBurial} />
              <Route path="/cards" component={Cards} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
