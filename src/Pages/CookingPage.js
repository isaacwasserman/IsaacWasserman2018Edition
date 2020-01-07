import React, { Component } from 'react';
import './Stylesheets/CookingPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class CookingPage extends Component {

  render() {
    return (
      <div id="cooking-body">
        <div id="cooking-header">
          <div id="cooking-header-title">
            <span>Isaac Wasserman</span>
            <span id="cooking-header-title-slash">/</span>
            <span>eats</span>
          </div>
          <div id="nav-container">
            <Link to="/cooking"><h6 class="nav-option">Home</h6></Link>
            <h6 class="nav-option">Recipes</h6>
            <Link to="/cooking/blog"><h6 class="nav-option">Blog</h6></Link>
            <h6 class="nav-option">About</h6>
          </div>
        </div>
        <div id="cooking-content">
          <div id="cooking-featured-container">
            <div id="cooking-featured">
              <div id="big-featured">
                <div id="big-featured-image-container">
                  <img id="big-featured-image" src={process.env.PUBLIC_URL + '../TestImages/IMG_8107.jpg'}/>
                </div>
                <div id="big-featured-text">
                  <h3 id="big-featured-title">Holed Foods</h3>
                  <div class="featured-badge blog-badge">Blog</div>
                  <h4 id="big-featured-preview-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                  <h4 id="big-featured-preview-text-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                </div>
              </div>
              <div id="small-features">
                <div class="small-featured">
                  <div class="small-featured-image-container">
                    <img class="small-featured-image" src={process.env.PUBLIC_URL + '../TestImages/cookingtest.jpg'}/>
                  </div>
                  <div class="small-featured-text">
                    <h3 class="small-featured-title">Why Noodles Are Everything</h3>
                    <div class="featured-badge blog-badge">Blog</div>
                    <h4 class="small-featured-preview-text">This is an intentionally long piece of preview text. It needs to be longer so I am making it much longer.</h4>
                  </div>
                </div>
                <div class="small-featured">
                  <div class="small-featured-image-container">
                    <img class="small-featured-image" src={process.env.PUBLIC_URL + '../TestImages/IMG_6452.jpg'}/>
                  </div>
                  <div class="small-featured-text">
                    <h3 class="small-featured-title">Invest In This Stock</h3>
                    <div class="featured-badge recipe-badge">Recipe</div>
                    <h4 class="small-featured-preview-text">This is an intentionally long piece of preview text. It needs to be longer so I am making it much longer.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<div id="cooking-recent">
            <h2 id="cooking-recent-header">RECENT POSTS</h2>
            <div id="recent-posts-container">
              <div class="recent-post">
                <img class="recent-post-image" src={process.env.PUBLIC_URL + 'TestImages/cookingtest.jpg'}/>
              </div>
              <div class="recent-post"></div>
              <div class="recent-post"></div>
            </div>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default CookingPage;
