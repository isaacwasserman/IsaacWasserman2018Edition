import React, { Component } from 'react';
import './Stylesheets/HomePage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div id="cutout"></div>
        <div id="text-container">
          <h1 id="name">Isaac<br/>Wasserman</h1>
          <h3 id="first-link-section" class="link-section"><span><Link to="/photography">Photographer</Link></span>, <span><Link to="/photography">Technologist</Link></span>, <span><Link to="/photography">Chef</Link></span>.</h3>
          <h3 class="link-section">Always <span id="learning-link"><Link to="/photography">learning</Link></span>.</h3>
        </div>
      </div>
    );
  }
}

export default HomePage;
