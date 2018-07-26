import React, { Component } from 'react';
import './Stylesheets/PhotographyPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class PhotographyPage extends Component {
  render() {
    return (
      <div id="photography-body">
        <div id="text-container">
          <Link to="/photography">
            <div id="name" class="link-section">
              <h1>Isaac</h1>
              <h1>Wasserman</h1>
              <div></div>
            </div>
          </Link>
          <div id="sidebar-nav" class="link-section">
            <ul>
              <Link to="/photography/portraits"><li>Portraits</li>,</Link>&nbsp;
              <Link to="/photography/nature"><li>Nature</li>,</Link>&nbsp;
              <Link to="/photography/people"><li>People</li>,</Link>&nbsp;
              <Link to="/photography/more"><li>More</li></Link>
            </ul>
          </div>
        </div>
        <div id="feature-images">
          <div class="feature-image"></div>
          <div class="feature-image"></div>
        </div>
      </div>
    );
  }
}

export default PhotographyPage;
