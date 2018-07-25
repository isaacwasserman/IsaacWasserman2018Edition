import React, { Component } from 'react';
import './Stylesheets/HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div id="cutout"></div>
        <div id="text-container">
          <h1>Isaac<br/>Wasserman</h1>
          <h3><span>Photographer</span>, <span>Technologist</span>, <span>Chef</span>.</h3>
          <h3>Always <span>learning</span>.</h3>
        </div>
      </div>
    );
  }
}

export default HomePage;
