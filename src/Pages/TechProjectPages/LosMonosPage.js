import React, { Component } from 'react';
import '../Stylesheets/TechProjectPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class LosMonosPage extends Component {

  state = {
  }

  render() {

    return (
      <div id="TechProjectPage-Body">
        <Link id="HomeLink" to="/technology"><h1 id="TechProjectPage-Name">Isaac Wasserman</h1></Link>
        <div id="TextColumn">
          <h2 id="ProjectTitle">Los Monos</h2>
          <h4 id="Subtitle">iMessage Sticker Pack</h4>
          <h4 id="Year">2017</h4>
          <p id="Description">
            Monos, the monkey's more evolutionarily advanced relative, are a phenomenal way to communicate any emotion through iMessage. Just try it!
            <br></br><br></br>
            BTW, do not confuse monkeys with monos. They will go bananas.
            <br></br><br></br>
            BTW, do not try to feed monos bananas. They prefer plátanos.
          </p>
          <a class="OutsideLink" href="https://itunes.apple.com/us/app/mono-stickers/id1248094430?mt=8" target="_blank">Monos on the App Store</a>
        </div>
        <div id="PhotoColumn">
          <img class="Photo" src={require('../Images/Technologist/Projects/LosMonos/LosMonosInAction.png')}/>
          <h3 class="Caption">Los Monos In Action</h3>
        </div>
      </div>
    );
  }
}

export default LosMonosPage;
