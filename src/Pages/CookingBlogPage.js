import React, { Component } from 'react';
import './Stylesheets/CookingBlogPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class CookingBlogPage extends Component {

  render() {
    return (
      <div id="cooking-blog-body">
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
        <div id="cooking-blog-content">
          <div id="cooking-blog-posts">
            <div class="cooking-blog-post">
              <img class="cooking-blog-post-hero-image" src={process.env.PUBLIC_URL + "../../TestImages/HoledFoods.jpg"}/>
              <div class="cooking-blog-post-text">
                <h1 class="cooking-blog-post-title">Holed Foods</h1>
                <h6 class="cooking-blog-post-timestamp">4/16/19</h6>
                <p class="cooking-blog-post-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="cooking-blog-content">
          <div id="cooking-blog-posts">
            <div class="cooking-blog-post">
              <img class="cooking-blog-post-hero-image" src={process.env.PUBLIC_URL + "../../TestImages/HoledFoods.jpg"}/>
              <div class="cooking-blog-post-text">
                <h1 class="cooking-blog-post-title">Holed Foods</h1>
                <h6 class="cooking-blog-post-timestamp">4/16/19</h6>
                <p class="cooking-blog-post-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="cooking-blog-content">
          <div id="cooking-blog-posts">
            <div class="cooking-blog-post">
              <img class="cooking-blog-post-hero-image" src={process.env.PUBLIC_URL + "../../TestImages/HoledFoods.jpg"}/>
              <div class="cooking-blog-post-text">
                <h1 class="cooking-blog-post-title">Holed Foods</h1>
                <h6 class="cooking-blog-post-timestamp">4/16/19</h6>
                <p class="cooking-blog-post-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CookingBlogPage;
