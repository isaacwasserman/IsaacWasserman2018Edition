import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

class Dimensional extends Component {

  state = {
    height: 400,
    width: 600,
    color: 'lightgrey',
    distance: 40,
  }



  render() {

    var PositionDifference = Math.sqrt(Math.pow(this.props.distance, 2) / 2) + 'px'

    var Offsets = {
      BottomCorner: {
        top: this.props.height - (Math.sqrt((2 * Math.pow(this.props.distance, 2))) / 2) + ((Math.sqrt((2 * Math.pow(this.props.distance, 2))) - this.props.distance) / 2),
        left: (Math.sqrt((2 * Math.pow(this.props.distance, 2))) - this.props.distance) / 2
      },
      TopCorner: {
        top: (Math.sqrt((2 * Math.pow(this.props.distance, 2))) - this.props.distance) / 2,
        left: this.props.width - (Math.sqrt((2 * Math.pow(this.props.distance, 2))) / 2) + ((Math.sqrt((2 * Math.pow(this.props.distance, 2))) - this.props.distance) / 2)
      },
    }

    var RootDimensions = {
      height: (parseInt(this.props.height) + Math.sqrt(Math.pow(this.props.distance, 2) / 2)) + 'px',
      width: (parseInt(this.props.width) + Math.sqrt(Math.pow(this.props.distance, 2) / 2)) + 'px',
    }

    // console.log(RootDimensions);

    var RootStyle = Object.assign({position: 'relative', display: 'block', height: RootDimensions.height, width: RootDimensions.width}, this.props.style)

    return (
      <div id="DimensionalRoot" style={RootStyle}>
        <div id="DimensionalTopCorner" style={{height: this.props.distance + 'px', width: this.props.distance + 'px', backgroundColor: this.props.color, position: 'absolute', top: Offsets.TopCorner.top, left:  Offsets.TopCorner.left, transform: 'rotate(45deg)'}}></div>
        <div id="DimensionalBottomCorner" style={{height: this.props.distance + 'px', width: this.props.distance + 'px', backgroundColor: this.props.color, position: 'absolute', top: Offsets.BottomCorner.top, left: Offsets.BottomCorner.left, transform: 'rotate(45deg)'}}></div>
        <div id="DimensionalBack" style={{height: this.props.height + 'px', width: this.props.width + 'px', backgroundColor: this.props.color, position: 'absolute', top: PositionDifference, left: PositionDifference}}></div>
        <div id="DimensionalFront" style={{height: this.props.height + 'px', width: this.props.width + 'px', backgroundColor: this.props.color, position: 'absolute', top: '0px', left: '0px', overflow: 'hidden'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Dimensional;
