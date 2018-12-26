import React, { Component } from 'react';
import '../Stylesheets/TechProjectPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class FortySixPage extends Component {

  state = {
  }

  render() {

    return (
      <div id="TechProjectPage-Body">
        <Link id="HomeLink" to="/technology"><h1 id="TechProjectPage-Name">Isaac Wasserman</h1></Link>
        <div id="TextColumn">
          <h2 id="ProjectTitle">Forty Six</h2>
          <h4 id="Subtitle">Neural Art</h4>
          <h4 id="Year">2018</h4>
          <p id="Description">
            What can the past tell us about the future?
            <br/><br/>
            For this project, I trained a <a class="OutsideLink" target="_blank" href="https://en.wikipedia.org/wiki/Generative_adversarial_network">generative adversarial neural network</a> on pairs of US presidents and their successor (ex. George Washington paired with John Adams) in an attempt to recognize a transform that each president tends to have over their predecessor.
            <br/><br/>
            The name "Forty Six" refers to the goal of producing a prediction of the face of the 46th president of the United States, whoever that may be.
            <br/><br/>
            (I do, of course, recognize that this is completely impractical as the faces of candidates have little to no bearing on their chances of being elected.)
          </p>
          {/*<a class="OutsideLink" href="https://itunes.apple.com/us/app/when-i-say/id1006415871?mt=8" target="_blank">When I Say on the App Store</a>*/}
        </div>
        <div id="PhotoColumn">
          <img class="Photo" src={require('../Images/Technologist/Projects/FortySix/FortySix.png')}/>
          <h3 class="Caption">"Forty Six"</h3>
          <img class="Photo" src={require('../Images/Technologist/Projects/FortySix/HerbertHoover.png')}/>
          <h3 class="Caption">Herbert Hoover Prediction</h3>
          <img class="Photo" src={require('../Images/Technologist/Projects/FortySix/CalvinCoolidge.png')}/>
          <h3 class="Caption">Calvin Coolidge Prediction</h3>
          <img class="Photo" src={require('../Images/Technologist/Projects/FortySix/BenjaminHarrison.png')}/>
          <h3 class="Caption">Benjamin Harrison Prediction</h3>
        </div>
      </div>
    );
  }
}

export default FortySixPage;
