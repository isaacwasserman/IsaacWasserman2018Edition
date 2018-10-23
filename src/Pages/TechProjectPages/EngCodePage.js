import React, { Component } from 'react';
import '../Stylesheets/TechProjectPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class EngCodePage extends Component {

  state = {
  }

  render() {

    return (
      <div id="TechProjectPage-Body">
        <Link id="HomeLink" to="/technology"><h1 id="TechProjectPage-Name">Isaac Wasserman</h1></Link>
        <div id="TextColumn">
          <h2 id="ProjectTitle">EngCode</h2>
          <h4 id="Subtitle">Crossplatform Plaintext Encryption</h4>
          <h4 id="Year">2018</h4>
          <p id="Description">
            EngCode uses 128-bit AES encryption to encode any string of characters you give it as a list of many often esoteric English words.
            <br></br><br></br>
            Use it to send secret messages to your friends that can only be decrypted with a shared 4-digit encryption key.
          </p>
          <a class="OutsideLink" href="https://engcode.tk" target="_blank">EngCode.tk</a>
        </div>
        <div id="PhotoColumn">
          <img class="Photo" src={require('../Images/Technologist/Projects/EngCode/Unencoded.png')}/>
          <h3 class="Caption">Pre-Encryption</h3>
          <img class="Photo" src={require('../Images/Technologist/Projects/EngCode/Encoded.png')}/>
          <h3 class="Caption">Post-Encryption</h3>
        </div>
      </div>
    );
  }
}

export default EngCodePage;
