import React, { Component } from 'react';
import '../Stylesheets/TechProjectPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class KimKalldashianPage extends Component {

  state = {
  }

  render() {

    return (
      <div id="TechProjectPage-Body">
        <Link id="HomeLink" to="/technology"><h1 id="TechProjectPage-Name">Isaac Wasserman</h1></Link>
        <div id="TextColumn">
          <h2 id="ProjectTitle">Kim Kalldashian</h2>
          <h4 id="Subtitle">Web App</h4>
          <h4 id="Year">2015</h4>
          <p id="Description">
            Give Kim Kalldashian you, your friend, or your enemy's number, and we'll call and read them Kim Kardashian West's latest tweet.
            <br></br><br></br>
            Kim Kalldashian makes use of the Twilio API to make real phone calls using XML and POST requests.
          </p>
          <a class="OutsideLink" href="https://kimkalldashian.com" target="_blank">KimKalldashian.com</a>
        </div>
        <div id="PhotoColumn">
          <img class="Photo" src={require('../Images/Technologist/Projects/KimKalldashian/KimKalldashianInAction.png')}/>
          <h3 class="Caption">Kim Kalldashian In Action</h3>
        </div>
      </div>
    );
  }
}

export default KimKalldashianPage;
