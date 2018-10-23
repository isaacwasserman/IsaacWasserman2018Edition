import React, { Component } from 'react';
import '../Stylesheets/TechProjectPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class AMFEWebsitePage extends Component {

  state = {
  }

  render() {

    return (
      <div id="TechProjectPage-Body">
        <Link id="HomeLink" to="/technology"><h1 id="TechProjectPage-Name">Isaac Wasserman</h1></Link>
        <div id="TextColumn">
          <h2 id="ProjectTitle">AMFE Website</h2>
          <h4 id="Subtitle">Web App</h4>
          <h4 id="Year">2017</h4>
          <p id="Description">
            Alices March for Equality was an event to advocate for the passage of the Equal Rights Amendment.
            <br></br><br></br>
            To contribute to the march, I developed a website for marketing and educational purposes, and I also produced all graphic designs.
          </p>
          <a class="OutsideLink" href="https://alices-march-for-equality.herokuapp.com/" target="_blank">Mirror of AlicesMarchForEquality.com</a>
        </div>
        <div id="PhotoColumn">
          <img class="Photo" src={require('../Images/Technologist/Projects/AMFEWebsite/HomePage.png')}/>
          <h3 class="Caption">Home Page</h3>
          <img class="Photo" src={require('../Images/Technologist/Projects/AMFEWebsite/TakeAction.png')}/>
          <h3 class="Caption">Tool For Contacting Your Representatives</h3>
          <img class="Photo" src={require('../Images/Technologist/Projects/AMFEWebsite/WebsiteContent.png')}/>
          <h3 class="Caption">More Web Content</h3>
        </div>
      </div>
    );
  }
}

export default AMFEWebsitePage;
