import React, { Component } from 'react';
import './Stylesheets/TechnologyPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

import Dimensional from './Components/Dimensional.js'

class TechnologyPage extends Component {

  state = {
    WindowWidth: 1000,
    HeaderWidth: 450,
    HeaderHeight: 130
  }

  updateDimensions() {
    let update_width  = window.innerWidth;
    this.setState({ WindowWidth: update_width });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {

    if(this.state.WindowWidth <= 500 && this.state.HeaderWidth == 450){
      this.setState({HeaderWidth: 325, HeaderHeight: 100})
    }
    else if(this.state.WindowWidth > 500 && this.state.HeaderWidth != 450){
      this.setState({HeaderWidth: 450, HeaderHeight: 130})
    }

    return (
      <div id="technology-body">
        <Link to="/">
          <div id="Header">
            <Dimensional id="HeaderDimensional" width={this.state.HeaderWidth} height={this.state.HeaderHeight} distance={15} color={'#00FFCE'} style={{margin: '0 auto'}}>
              <div id="HeaderInner">
                <h3 id="Name">Isaac Wasserman</h3>
                <h1 id="Title">Technologist</h1>
              </div>
            </Dimensional>
          </div>
        </Link>
        <div id="Gallery">
          <Link to="/technology/EngCode">
            <div className="TechGalleryItem">
              <Dimensional className="TechGalleryItemDimensional" width={325} height={200} distance={10} color={'lightgrey'}>
                <img className="TechGalleryItemImage" src={require('./Images/Technologist/GalleryImages/EngCode.png')}/>
                <h4 className="TechGalleryItemTitle">EngCode</h4>
              </Dimensional>
            </div>
          </Link>
          <Link to="/technology/BathtubVR">
            <div className="TechGalleryItem">
              <Dimensional className="TechGalleryItemDimensional" width={325} height={200} distance={10} color={'lightgrey'} style={{marginBottom: '50px'}}>
                <img className="TechGalleryItemImage" src={require('./Images/Technologist/GalleryImages/BathtubVR.png')}/>
                <h4 className="TechGalleryItemTitle">BathtubVR</h4>
              </Dimensional>
            </div>
          </Link>
          <Link to="/technology/LosMonos">
            <div className="TechGalleryItem">
              <Dimensional className="TechGalleryItemDimensional" width={325} height={200} distance={10} color={'lightgrey'} style={{marginBottom: '50px'}}>
                <img className="TechGalleryItemImage" src={require('./Images/Technologist/GalleryImages/LosMonos.png')}/>
                <h4 className="TechGalleryItemTitle">Los Monos</h4>
              </Dimensional>
            </div>
          </Link>
          <Link to="/technology/WhenISay">
            <div className="TechGalleryItem">
              <Dimensional className="TechGalleryItemDimensional" width={325} height={200} distance={10} color={'lightgrey'} style={{marginBottom: '50px'}}>
                <img className="TechGalleryItemImage" src={require('./Images/Technologist/GalleryImages/WhenISay.png')}/>
                <h4 className="TechGalleryItemTitle">When I Say</h4>
              </Dimensional>
            </div>
          </Link>
          <Link to="/technology/KimKalldashian">
            <div className="TechGalleryItem">
              <Dimensional className="TechGalleryItemDimensional" width={325} height={200} distance={10} color={'lightgrey'} style={{marginBottom: '50px'}}>
                <img className="TechGalleryItemImage" src={require('./Images/Technologist/GalleryImages/KimKalldashian.png')}/>
                <h4 className="TechGalleryItemTitle">Kim Kalldashian</h4>
              </Dimensional>
            </div>
          </Link>
          <Link to="/technology/AMFEWebsite">
            <div className="TechGalleryItem">
              <Dimensional className="TechGalleryItemDimensional" width={325} height={200} distance={10} color={'lightgrey'} style={{marginBottom: '50px'}}>
                <img className="TechGalleryItemImage" src={require('./Images/Technologist/GalleryImages/AMFE.png')}/>
                <h4 className="TechGalleryItemTitle">AMFE Website</h4>
              </Dimensional>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default TechnologyPage;
