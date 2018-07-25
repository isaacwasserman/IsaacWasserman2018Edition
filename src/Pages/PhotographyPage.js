import React, { Component } from 'react';
import './Stylesheets/PhotographyPage.css';

class PhotographyPage extends Component {
  render() {
    return (
      <div id="photography-body">
        <div id="text-container">
          <h1 id="name" class="link-section">Isaac<br/>Wasserman</h1>
          <div id="sidebar-nav" class="link-section">
            <ul>
              <li>Portraits</li>
              <li>Nature</li>
              <li>People</li>
              <li>Portraits</li>
              <li>More</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotographyPage;
