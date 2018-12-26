import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage.js';
import PhotographyPage from './Pages/PhotographyPage.js';
import PhotoCategoryPage from './Pages/PhotoCategoryPage.js';
import TechnologyPage from './Pages/TechnologyPage.js';

//TechProjectPages
import EngCodePage from './Pages/TechProjectPages/EngCodePage.js';
import BathtubVRPage from './Pages/TechProjectPages/BathtubVRPage.js';
import LosMonosPage from './Pages/TechProjectPages/LosMonosPage.js';
import WhenISayPage from './Pages/TechProjectPages/WhenISayPage.js';
import KimKalldashianPage from './Pages/TechProjectPages/KimKalldashianPage.js';
import AMFEWebsitePage from './Pages/TechProjectPages/AMFEWebsitePage.js';
import FortySixPage from './Pages/TechProjectPages/FortySixPage.js';

class App extends Component {
  render() {
    return (
      <body>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/photography" component={PhotographyPage}/>
          <Route path="/photography/:category" component={PhotoCategoryPage}/>
          <Route exact path="/technology" component={TechnologyPage}/>

          <Route exact path="/technology/EngCode" component={EngCodePage}/>
          <Route exact path="/technology/BathtubVR" component={BathtubVRPage}/>
          <Route exact path="/technology/LosMonos" component={LosMonosPage}/>
          <Route exact path="/technology/WhenISay" component={WhenISayPage}/>
          <Route exact path="/technology/KimKalldashian" component={KimKalldashianPage}/>
          <Route exact path="/technology/AMFEWebsite" component={AMFEWebsitePage}/>
          <Route exact path="/technology/FortySix" component={FortySixPage}/>
        </Switch>
      </body>
    );
  }
}

export default App;
