import React, { Component } from 'react';
import '../Stylesheets/TechProjectPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class BathtubVRPage extends Component {

  state = {
  }

  render() {

    return (
      <div id="TechProjectPage-Body">
        <Link id="HomeLink" to="/technology"><h1 id="TechProjectPage-Name">Isaac Wasserman</h1></Link>
        <div id="TextColumn">
          <h2 id="ProjectTitle">Bathtub VR</h2>
          <h4 id="Subtitle">VR Experience</h4>
          <h4 id="Year">2017</h4>
          <p id="Description">
            Submerge yourself in a VR bathtub, complete with a smoking battleship in this “immersive” VR experience.
            <br></br><br></br>
            Bathtub VR is based on AFrame which uses the WebVR specification to display multiplatform virtual reality in the browser.
          </p>
          <a class="OutsideLink" href="https://bathtubvr.tk" target="_blank">BathtubVR.tk</a>
        </div>
        <div id="PhotoColumn">
          <img class="Photo" src={require('../Images/Technologist/Projects/BathtubVR/DesktopMode.png')}/>
          <h3 class="Caption">Desktop Mode</h3>
          <img class="Photo" src={require('../Images/Technologist/Projects/BathtubVR/VRMode.png')}/>
          <h3 class="Caption">VR Mode</h3>
        </div>
      </div>
    );
  }
}

export default BathtubVRPage;
