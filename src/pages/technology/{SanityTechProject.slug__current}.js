import React, { Component } from 'react'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from '../../components/header.js'
import Dimensional from '../../components/dimensional.js'
import { BlockContent, serializers } from '../../helpers/portableText.js'
import '../../resources/css/techProject.css'

function TechProject({data}){
  let images = data.project.media.images.map((image, index) => (
    <div className="figureContainer">
      <figure>
        {image._type == "richImage" ? <Img className="Photo" fluid={image.asset.fluid}/> : null}
        {image._type == "richVideo" ? <video className="Photo" src={image.asset.url} autoPlay={image.autoplay} loop={image.loop} muted={image.mute} playsInline={image.playsInline} controls={image.showControls}></video> : null}
        <figcaption>{image.caption}</figcaption>
      </figure>
    </div>
  ))
  const SanityDateFormatter = (date) => (new Date((new Date(date * 1)).toUTCString().replace("GMT","EST"))).getFullYear()
  return(
    <div>
      <Header/>
        <div id="TechProjectPage-Body">
          <div id="TextColumn">
            <h2 id="ProjectTitle">{data.project.title}</h2>
            <h4 id="Subtitle">{data.project.subtitle}</h4>
            <h4 id="Year">{SanityDateFormatter(data.project.date)}</h4>
            <div id="Description">
              <BlockContent blocks={data.project.description._rawBlocks} serializers={serializers}/>
            </div>
          </div>
          <div id="PhotoColumn">
            {images}
          </div>
        </div>
    </div>
  )
}

export const query = graphql`
  query($slug__current: String) {
    project: sanityTechProject(slug: { current: { eq: $slug__current } }) {
      date(formatString: "x")
      slug {
        current
      }
      description {
        _rawBlocks
      }
      media {
      images {
          ... on SanityRichImage {
            _key
            _type
            caption
            asset {
              fluid {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          ... on SanityRichVideo {
            _key
            _type
            caption
            autoplay
            loop
            mute
            playsInline
            showControls
            asset {
              url
            }
          }
        }
      }
      subtitle
      title
    }
  }
`

export default TechProject;
