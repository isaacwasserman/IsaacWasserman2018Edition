import React from 'react'
import { Link, graphql, withPrefix } from "gatsby"
import Header from '../../components/header.js'
import denode from '../../helpers/denode.js'
import Img from "gatsby-image"
import { BlockContent, serializers } from '../../helpers/portableText.js'
import urlBuilder from '../../helpers/urlBuilder.js'

import '../../resources/css/cooking.css'

const _ = require('lodash')

const CookingPage = (props) => {
  const sortTags = (selectedTags) => {
    let selectedTagNames = selectedTags.map(tag => tag.name.current)
    let sorted = []
    let allSorted = []
    let frequencies = JSON.parse(props.data.allBuildDataJson.edges[0].node.frequenciesString)

    while(Object.keys(frequencies).length > 0){
      // console.log(frequencies)
      var keyWithMax, max = null;

      for(const [key, value] of Object.entries(frequencies)) {
        if(value > max) {
          max = value;
          keyWithMax = key;
        }
      }

      allSorted.push(keyWithMax)
      if(selectedTagNames.includes(keyWithMax)){
        sorted.push(keyWithMax)
      } else {
        // console.log(`${keyWithMax} not in ${selectedTagNames}`)
      }
      delete frequencies[keyWithMax]
    }
    // console.log(sorted)
    // console.log(allSorted)
    return sorted
  }
  console.log(props)
  let post = props.data.post
  const SanityDateFormatter = (date) => (new Date((new Date(date * 1)).toUTCString().replace("GMT","EST"))).toLocaleDateString()
  return(
    <div id="scrollableTarget">
      <Header/>
      <div id="cooking-body">
        <div id="main">
          <div id="feedContainer">
            <div id="feed">
              <div className="post">
                <div className="heroImage">
                  <Img fluid={post.image.asset.fluid}></Img>
                </div>
                <div className="postText">
                  <h1 className="title">{post.title}</h1>
                  <div className="postDetails">
                    <h6 className="date">{ post.date ? SanityDateFormatter(post.date) : SanityDateFormatter(post._createdAt) }</h6>
                    &nbsp;&nbsp;&nbsp;
                    <ul className="tags">
                      {
                        sortTags(post.tags).map((tag, index) => (
                          <span>
                            <li>#{tag}</li>
                            {(index < post.tags.length - 1) ? <span>&nbsp;&nbsp;</span> : <span></span>}
                          </span>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="postBody">
                    <BlockContent blocks={post.body._rawBlocks} serializers={serializers}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookingPage

export const query = graphql`
  query ($slug__current: String) {
    post: sanityCookingPost(slug: {current: {eq: $slug__current}}) {
      id
      body {
        _rawBlocks(resolveReferences: {maxDepth: 10})
      }
      date(formatString: "x")
      image {
        asset {
          fluid {
            aspectRatio
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
          id
          metadata {
            dimensions {
              height
              width
            }
          }
          _id
        }
        crop {
          top
          bottom
          left
          right
        }
        hotspot {
          x
          y
        }
      }
      slug {
        current
      }
      title
      tags {
        name {
          current
        }
      }
      _createdAt
    }
    allBuildDataJson {
      edges {
        node {
          id
          frequenciesString
        }
      }
    }
  }
`
