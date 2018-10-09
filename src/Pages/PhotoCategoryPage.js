import React, { Component } from 'react';
import './Stylesheets/PhotoCategoryPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import Gallery from 'react-photo-gallery';
import GooglePhoto from 'react-google-photo';

const Portrait_Set = [
  {
    src: require('./Images/Portraits/Portrait01.jpg'),
    width: 2048,
    height: 1152
  },
  {
    src: require('./Images/Portraits/Portrait02.jpg'),
    width: 1365,
    height: 2048
  },
  {
    src: require('./Images/Portraits/Portrait03.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portrait04.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portrait05.jpg'),
    width: 1366,
    height: 2048
  },
  {
    src: require('./Images/Portraits/Portrait06.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portrait07.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portrait08.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portrait09.jpg'),
    width: 2048,
    height: 1152
  },
  {
    src: require('./Images/Portraits/Portrait10.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portrait11.jpg'),
    width: 1366,
    height: 2048
  },
  {
    src: require('./Images/Portraits/Portrait12.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portrait13.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Portraits/Portrait14.jpg'),
    width: 2048,
    height: 1152
  },
];

const Nature_Set = [
  {
    src: require('./Images/Nature/Nature01.jpg'),
    width: 2048,
    height: 1152
  },
  {
    src: require('./Images/Nature/Nature02.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: require('./Images/Nature/Nature03.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature04.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature05.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature06.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: require('./Images/Nature/Nature07.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature08.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature09.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature10.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: require('./Images/Nature/Nature11.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature12.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature13.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature14.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/Nature/Nature15.jpg'),
    width: 2048,
    height: 1366
  }
];

const People_Set = [
  {
    src: require('./Images/People/People01.jpg'),
    width: 1366,
    height: 2048
  },
  {
    src: require('./Images/People/People02.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/People/People03.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/People/People04.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/People/People05.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/People/People06.jpg'),
    width: 2048,
    height: 2017
  },
  {
    src: require('./Images/People/People07.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/People/People08.jpg'),
    width: 2048,
    height: 2017
  },
  {
    src: require('./Images/People/People09.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/People/People10.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/People/People11.jpg'),
    width: 2048,
    height: 1358
  }
]

const More_Set = [
  {
    src: require('./Images/More/More01.jpg'),
    width: 1358,
    height: 2048
  },
  {
    src: require('./Images/More/More02.jpg'),
    width: 2048,
    height: 1358
  },
  {
    src: require('./Images/More/More03.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/More/More04.jpg'),
    width: 2048,
    height: 1361
  },
  {
    src: require('./Images/More/More05.jpg'),
    width: 2048,
    height: 1366
  },
  {
    src: require('./Images/More/More06.jpg'),
    width: 2048,
    height: 1365
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
