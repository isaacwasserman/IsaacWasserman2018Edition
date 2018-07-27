import React, { Component } from 'react';
import './Stylesheets/PhotographyPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class PhotographyPage extends Component {

  state = {
    FeatureImages: [require("./Images/PhotographyHome/Feature1.jpg"), require("./Images/PhotographyHome/Feature2.jpg")]
  }

  render() {
    return (
      <div id="photography-body">
        <div id="text-container">
          <Link to="/">
            <div id="name" class="link-section">
              <h1>Isaac</h1>
              <h1>Wasserman
                <div></div>
              </h1>
            </div>
          </Link>
          <div id="sidebar-nav" class="link-section">
            <ul>
              <Link to="/photography/people"><li>People</li>,</Link>&nbsp;
              <Link to="/photography/nature"><li>Nature</li>,</Link>&nbsp;
              <Link to="/photography/portraits"><li>Portraits</li>,</Link>&nbsp;
              <Link to="/photography/more"><li>More</li></Link>
            </ul>
          </div>
          {/*<Link to="/">
            <div id="HomeButton">Home</div>
          </Link>*/}
        </div>
        <div id="feature-images">
          <div class="feature-image" style={{backgroundImage: 'url(' + this.state.FeatureImages[0] + ')'}}></div>
          <div class="feature-image" style={{backgroundImage: 'url(' + this.state.FeatureImages[1] + ')'}}></div>
          <img class="mobile-feature-image" src={this.state.FeatureImages[0]}/>
        </div>
      </div>
    );
  }
}

export default PhotographyPage;
