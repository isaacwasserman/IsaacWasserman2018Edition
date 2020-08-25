import React, { Component } from 'react';
import './Stylesheets/PhotoCategoryPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import Gallery from 'react-photo-gallery';
import GooglePhoto from 'react-google-photo';

const Portrait_Set = [
  {
    src: require('./Images/Portraits/Portraits-14.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portraits-03.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portraits-06.jpg'),
    width: 1365,
    height: 2048
  },
  {
    src: require('./Images/Portraits/Portraits-12.jpg'),
    width: 2048,
    height: 1152
  },
  {
    src: require('./Images/Portraits/Portraits-07.jpg'),
    width: 2048,
    height: 1152
  },
  {
    src: require('./Images/Portraits/Portraits-04.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portraits-11.jpg'),
    width: 1366,
    height: 2048
  },
  {
    src: require('./Images/Portraits/Portraits-02.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portraits-05.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portraits-01.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portraits-08.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portraits-09.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portraits-10.jpg'),
    width: 2048,
    height: 1152
  },
  {
    src: require('./Images/Portraits/Portraits-13.jpg'),
    width: 1366,
    height: 2048
  },
];

const Nature_Set = [
  {
    src: require('./Images/Nature/Nature-17.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-16.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-09.jpg'),
    width: 2048,
    height: 1365
  },  
  {
    src: require('./Images/Nature/Nature-14.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-08.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-03.jpg'),
    width: 2048,
    height: 1152
  },
  {
    src: require('./Images/Nature/Nature-04.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-05.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-06.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-07.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-02.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-10.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-11.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-12.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-13.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-15.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature-01.jpg'),
    width: 2048,
    height: 1366
  },
];

const People_Set = [
  {
    src: require('./Images/People/People-12.jpg'),
    width: 1366,
    height: 2048
  },
  {
    src: require('./Images/People/People-07.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/People/People-05.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/People/People-04.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/People/People-01.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/People/People-11.jpg'),
    width: 1449,
    height: 2048
  },
  {
    src: require('./Images/People/People-15.jpg'),
    width: 1366,
    height: 2048
  },
  {
    src: require('./Images/People/People-14.jpg'),
    width: 1366,
    height: 2048
  },
  {
    src: require('./Images/People/People-02.jpg'),
    width: 2048,
    height: 2017
  },
  {
    src: require('./Images/People/People-03.jpg'),
    width: 2048,
    height: 2017
  },
  {
    src: require('./Images/People/People-06.jpg'),
    width: 1365,
    height: 2048
  },
  {
    src: require('./Images/People/People-08.jpg'),
    width: 1366,
    height: 2048
  },
  {
    src: require('./Images/People/People-09.jpg'),
    width: 2048,
    height: 1358
  },
  {
    src: require('./Images/People/People-10.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/People/People-13.jpg'),
    width: 1366,
    height: 2048
  },
]

const More_Set = [
  {
    src: require('./Images/More/More-07.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/More/More-08.jpg'),
    width: 1519,
    height: 2048
  },
  {
    src: require('./Images/More/More-01.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/More/More-02.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/More/More-06.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: require('./Images/More/More-03.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: require('./Images/More/More-04.jpg'),
    width: 2048,
    height: 1358
  },
  {
    src: require('./Images/More/More-05.jpg'),
    width: 1358,
    height: 2048
  },
]

const PhotoSets = {
  portraits: Portrait_Set,
  nature: Nature_Set,
  people: People_Set,
  more: More_Set
}

class PhotoCategoryPage extends Component {
  state = {
    index: 0,
    open: false
  };



  handleClickPrev = () => {
    this.setState({ index: this.state.index - 1 });
  };

  handleClickNext = () => {
    this.setState({ index: this.state.index + 1 });
  };

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  BigPicture = (event, obj) => {
    if(isBrowser){
      this.setState({index: obj.index, open: true});
    }
  };

  render() {

    return (
        <div id="photography-body">
          <div id="text-container">
            <Link to="/">
              <div id="name" class="link-section">
                <h1>Isaac</h1>
                <h1>Wasserman
                  <div></div>
                </h1>
              </div>
            </Link>
            <div id="sidebar-nav" class="link-section">
              <ul>
                <Link to="/photography/people"><li>People</li>,</Link>&nbsp;
                <Link to="/photography/nature"><li>Nature</li>,</Link>&nbsp;
                <Link to="/photography/portraits"><li>Portraits</li>,</Link>&nbsp;
                <Link to="/photography/more"><li>More</li></Link>
              </ul>
            </div>
          </div>
          <GooglePhoto
            open={this.state.open}
            src={PhotoSets[this.props.match.params.category]}
            srcIndex={this.state.index}
            onClickPrev={this.handleClickPrev}
            onClickNext={this.handleClickNext}
            onClose={this.handleClose}
          />
          <Gallery id="gallery" photos={PhotoSets[this.props.match.params.category]} onClick={this.BigPicture} />
        </div>
    );
  }
}

export default PhotoCategoryPage;
