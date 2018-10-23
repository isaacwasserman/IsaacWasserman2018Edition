import React, { Component } from 'react';
import '../Stylesheets/TechProjectPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class WhenISayPage extends Component {

  state = {
  }

  render() {

    return (
      <div id="TechProjectPage-Body">
        <Link id="HomeLink" to="/technology"><h1 id="TechProjectPage-Name">Isaac Wasserman</h1></Link>
        <div id="TextColumn">
          <h2 id="ProjectTitle">When I Say</h2>
          <h4 id="Subtitle">iOS App</h4>
          <h4 id="Year">2016</h4>
          <p id="Description">
            "When I say Hey you say Ho!"
            <br></br><br></br>
            "Hey!"
            <br></br><br></br>
            "Ho!"
            <br></br><br></br>
            "Hey!"
            <br></br><br></br>
            "Ho!"
            <br></br><br></br>
            When I say is a social app that allows you to do anything from posting a funny jingle to conveying a poignant message with a song. In When I Say, you make your own call and response songs similar to the hip-hop music of the Mid '90s. While it doesn't necessarily have a utility to it, it can be a fun way to communicate anything!
          </p>
          <a class="OutsideLink" href="https://itunes.apple.com/us/app/when-i-say/id1006415871?mt=8" target="_blank">When I Say on the App Store</a>
        </div>
        <div id="PhotoColumn">
          <img class="Photo" src={require('../Images/Technologist/Projects/WhenISay/WhenISayInAction.png')}/>
          <h3 class="Caption">When I Say In Action</h3>
        </div>
      </div>
    );
  }
}

export default WhenISayPage;
