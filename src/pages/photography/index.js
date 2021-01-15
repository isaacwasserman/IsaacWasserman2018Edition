import React, { Component } from 'react'
import { Link } from "gatsby"
import '../../resources/css/photography.css'
import { navigate } from "@reach/router"
import queryString from 'query-string';

import '../../resources/css/react-google-photo.css'
import Lightbox from 'react-google-photo'
import Gallery from 'react-photo-gallery'
import Header from '../../components/header.js'
import denode from '../../helpers/denode.js'

const _ = require('lodash')

export default class PhotographyPage extends React.Component {
  constructor(props){
    super(props)
    this.makeLists()
  }

  componentDidMount(){
    this.getCategory()
  }

  shift(list, element, delta) {
    let array = list
    let from = array.indexOf(element)
    let to = from + delta
    let maxTo = array.length
    // remove element
    array = array.slice(0, from).concat(array.slice(from + 1))
    if(to >= 0 && to < maxTo){
      // insert stored item into position `to`
      array = array.slice(0, to).concat([element]).concat(array.slice(to))
    }
    else if(to < 0){
      // put element at beginning
      array = [element].concat(array)
    }
    else if(to >= maxTo){
      // put element at end
      array = array.concat([element])
    }
    return array
  }

  usePriority(images){
    for(var i=0; i<images.length; i++){
      let image = images[i]
      if(image.priority != null){
        images = this.shift(images, image, image.priority * -1)
        images[images.indexOf(image)].priority = null
      }
    }
    return images
  }

  makeLists(){
    let allImages = []
    let categories = {
      people: [],
      portraits: [],
      nature: [],
      more: []
    }
    let featured = []

    for(var photo of denode(this.props.data.photos.edges)){
      let image = {
        src: photo.image.asset.url,
        width: photo.image.asset.metadata.dimensions.width,
        height: photo.image.asset.metadata.dimensions.height,
        category: photo.category,
        featured: photo.featured,
        priority: photo.priority
      }

      allImages.push(image)
    }
    allImages = this.usePriority(allImages)

    for(var image of allImages){
      categories[image.category].push(image)
      if(image.featured){
        featured.push(image)
      }
    }
    this.state = {
      allImages: allImages,
      featuredImages: featured,
      peopleImages: categories.people,
      portraitsImages: categories.portraits,
      natureImages: categories.nature,
      moreImages: categories.more,
      currentSet: featured,
      open: false,
      index: 0
    }
  }

  getCategory(){
    let query = this.props.location.search
    let params = queryString.parse(query)
    if('category' in params){
      return params.category
    }
    else {
      return 'featured'
    }
  }

  render(){
    let currentSet = this.state[this.getCategory() + "Images"]
    let galleryImages = _.cloneDeep(currentSet)
    let lightboxImages = _.cloneDeep(currentSet)
    let borderColors = {
      people: (this.getCategory()=="people") ? "#FF00F3FF" : "#FF00F344",
      nature: (this.getCategory()=="nature") ? "#FF00F3FF" : "#FF00F344",
      portraits: (this.getCategory()=="portraits") ? "#FF00F3FF" : "#FF00F344",
      more: (this.getCategory()=="more") ? "#FF00F3FF" : "#FF00F344"
    }
    return (
      <div>
        <Lightbox open={this.state.open} src={lightboxImages} srcIndex={this.state.index} onChangeIndex={newIndex => this.setState({index: newIndex})} onClose={() => this.setState({open: false})}/>
        <Header/>
        <div id="photography-body">
          <div id="sidebar-nav" className="link-section">
            <ul>
              <li>
                <Link to={"?category=people"} style={{borderColor: borderColors['people']}}>People</Link>,
              </li>
              <br/>
              <li>
                <Link to={"?category=nature"} style={{borderColor: borderColors['nature']}}>Nature</Link>,
              </li>
              <br/>
              <li>
                <Link to={"?category=portraits"} style={{borderColor: borderColors['portraits']}}>Portraits</Link>,
              </li>
              <br/>
              <li>
                <Link to={"?category=more"} style={{borderColor: borderColors['more']}}>More</Link>
              </li>
            </ul>
          </div>
          <div id="galleryContainer">
            <Gallery photos={galleryImages} onClick={(_, data) => { this.setState({index: data.index}); this.setState({open: true}) }} />
          </div>
        </div>
      </div>
    )
  }

}

export const query = graphql`
  query {
    photos: allSanityPhoto(sort: {fields: _createdAt}) {
      edges {
        node {
          image {
            asset {
              url
              metadata {
                dimensions {
                  height
                  width
                }
              }
            }
          }
          priority
          category
          featured
        }
      }
    }
  }
`
