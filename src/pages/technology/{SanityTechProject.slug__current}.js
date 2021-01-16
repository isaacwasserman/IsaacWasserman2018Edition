import React, { Component } from 'react'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from '../../components/header.js'
import Dimensional from '../../components/dimensional.js'
import { BlockContent, serializers } from '../../helpers/portableText.js'
import '../../resources/css/techProject.css'

function TechProject({data}){
  let images = data.project.media.images.map((image, index) => (
    <figure>
      <Img className="Photo" fluid={image.asset.fluid}/>
      <figcaption>{image.caption}</figcaption>
    </figure>
  ))

  return(
    <div>
      <Header/>
        <div id="TechProjectPage-Body">
          <div id="TextColumn">
            <h2 id="ProjectTitle">{data.project.title}</h2>
            <h4 id="Subtitle">{data.project.subtitle}</h4>
            <h4 id="Year">{(new Date(data.project.date + " UTC")).getUTCFullYear()}</h4>
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
      date
      slug {
        current
      }
      description {
        _rawBlocks
      }
      media {
        images {
          caption
          asset {
            fluid {
              ...GatsbySanityImageFluid_noBase64
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
