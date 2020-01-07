import React, { Component } from 'react';
import './Stylesheets/HomePage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div id="cutout"></div>
        <div id="text-container">
          <h1 id="name">Isaac<br/>Wasserman</h1>
          <h3 id="first-link-section" class="link-section">
            <span><Link to="/technology">Technologist</Link></span>, <br/>
            <span><Link to="/photography">Photographer</Link></span>.
            {/*<br/><span><Link to="/cooking">Chef</Link></span>.*/}
          </h3>
        </div>
      </div>
    );
  }
}

export default HomePage;
