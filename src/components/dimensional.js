import React, { Component } from 'react'

export default class Dimensional extends React.Component {
  constructor(props){
    super(props)

    this.noHoverClipPath = `polygon(
      -1px 0px,
      ${this.props.width}px 0px,
      ${this.props.width + this.props.offset}px ${this.props.offset}px,
      ${this.props.width + this.props.offset}px ${this.props.height + this.props.offset}px,
      ${this.props.offset}px ${this.props.height + this.props.offset}px,
      0px ${this.props.height}px)
    `
    this.hoverClipPath = `polygon(
      -1px 0px,
      ${this.props.width}px 0px,
      ${this.props.width + this.props.hoverOffset}px ${this.props.hoverOffset}px,
      ${this.props.width + this.props.hoverOffset}px ${this.props.height + this.props.hoverOffset}px,
      ${this.props.hoverOffset}px ${this.props.height + this.props.hoverOffset}px,
      0px ${this.props.height}px)
    `
    this.state = {
      clipPath: this.noHoverClipPath,
      offset: this.props.offset
    }
  }

  render(){
    console.log(this.state)
    return (
      <div className="dimensionalContainer" style={{height:this.props.height + this.props.hoverOffset + 50, width: this.props.width + this.props.hoverOffset, position: "relative", overflow: "visible", marginLeft: this.props.hoverOffset - this.props.offset}}>
        <div className="dimensionalShadow" style={{height: "100%", width: "100%", backgroundColor: this.props.color, position: "absolute", clipPath: this.state.clipPath, transition: "0.05s"}}></div>
        <div className="dimensionalContent" style={{height: this.props.height, width: this.props.width, position: "absolute", top: 0, left: 0}} onMouseEnter={()=>this.setState({clipPath: this.hoverClipPath, offset: this.props.hoverOffset})} onMouseLeave={()=>this.setState({clipPath: this.noHoverClipPath, offset: this.props.offset})}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
