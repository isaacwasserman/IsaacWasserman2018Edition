import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage.js';
import PhotographyPage from './Pages/PhotographyPage.js';
import PhotoCategoryPage from './Pages/PhotoCategoryPage.js';
import TechnologyPage from './Pages/TechnologyPage.js';

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
        </Switch>
      </body>
    );
  }
}

export default App;
