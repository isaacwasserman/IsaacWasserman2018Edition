import React, { Component } from 'react';
import './Stylesheets/PhotoCategoryPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

import Gallery from 'react-photo-gallery';

const Portrait_Set = [
  {
    src: '/Images/Portraits/Portrait01.jpg',
    width: 3,
    height: 2
  },
  {
    src: '/Images/Portraits/Portrait02.jpg',
    width: 2,
    height: 3
  },
  {
    src: '/Images/Portraits/Portrait03.jpg',
    width: 3,
    height: 2
  },
  {
    src: '/Images/Portraits/Portrait04.jpg',
    width: 3,
    height: 2
  },
  {
    src: '/Images/Portraits/Portrai05.jpg',
    width: 2,
    height: 3
  },
  {
    src: '/Images/Portraits/Portrait06.jpg',
    width: 3,
    height: 2
  },
  {
    src: '/Images/Portraits/Portrait07.jpg',
    width: 3,
    height: 2
  },
  {
    src: '/Images/Portraits/Portrait09.jpg',
    width: 3,
    height: 2
  },
  {
    src: '/Images/Portraits/Portrait10.jpg',
    width: 3,
    height: 2
  },
  {
    src: '/Images/Portraits/Portrait11.jpg',
    width: 2,
    height: 3
  },
  {
    src: '/Images/Portraits/Portrait12.jpg',
    width: 3,
    height: 2
  },
  {
    src: '/Images/Portraits/Portrait13.jpg',
    width: 3,
    height: 2
  },
  {
    src: '/Images/Portraits/Portrait14.jpg',
    width: 3,
    height: 2
  }
];

class PhotoCategoryPage extends Component {

  render() {
    return (
      <div id="photography-body">
        <div id="text-container">
          <div id="name" class="link-section">
            <h1>Isaac</h1>
            <h1>Wasserman</h1>
          </div>
          <div id="sidebar-nav" class="link-section">
            <ul>
              <Link to="/photography/portraits"><li>Portraits</li>,</Link>&nbsp;
              <Link to="/photography/nature"><li>Nature</li>,</Link>&nbsp;
              <Link to="/photography/people"><li>People</li>,</Link>&nbsp;
              <Link to="/photography/more"><li>More</li></Link>
            </ul>
          </div>
        </div>
        <Gallery photos={Portrait_Set} />
      </div>
    );
  }
}

export default PhotoCategoryPage;
