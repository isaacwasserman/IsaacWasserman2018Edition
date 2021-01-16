import React, { useState, useCallback } from 'react'
import { Link, graphql, withPrefix } from "gatsby"
import queryString from 'query-string';
import Header from '../../components/header.js'
import denode from '../../helpers/denode.js'
import Img from "gatsby-image"
import { BlockContent, serializers } from '../../helpers/portableText.js'
import urlBuilder from '../../helpers/urlBuilder.js'
import InfiniteScroll from 'react-infinite-scroll-component'
import CopyToClipboard from 'react-copy-to-clipboard'

import '../../resources/css/cooking.css'

const _ = require('lodash')

let dateString = (date) => {
  const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  // return monthNames[date.getMonth()] + " " + date.getDate() + nth(date.getDate()) + ", " + date.getFullYear()
  return date.toLocaleDateString(undefined, {year: "numeric", month: "2-digit", day: "2-digit"})
}

const CookingPage = (props) => {
  const initialPage = props.data.paginatedCollectionPage
  const [latestPage, setLatestPage] = useState(initialPage)
  const [cookingPosts, setCookingPosts] = useState(initialPage.nodes)
  const [tagFilter, setTagFilter] = useState((props.location.search.length > 0) ? queryString.parse(props.location.search).tag.split(",") : [])

  const loadNextPage = useCallback(async () => {
    console.log("loading next page")
    if (!latestPage.hasNextPage) return

    const collectionId = initialPage.collection.id
    const nextPageId = latestPage.nextPage.id
    const path = withPrefix(
      `/paginated-data/${collectionId}/${nextPageId}.json`,
    )

    const res = await fetch(path)
    const json = await res.json()

    setCookingPosts(state => [...state, ...json.nodes])
    setLatestPage(json)
  }, [latestPage])

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

  console.log(tagFilter)

  const filterByTag = (posts) => {
    // console.log(posts)
    // for(var post of posts){
    //   let postTags = []
    //   for(var tag of post.tags){
    //     postTags.push(tag.name.current)
    //   }
    //   let matchesTags = tagFilter.every(val => postTags.includes(val))
    //   console.log(matchesTags)
    //   post.matchesTags = matchesTags
    // }
    return posts
  }

  return(
    <div id="scrollableTarget">
      <Header/>
      <div id="cooking-body">
        <h1 className="pageTitle">Cooking Journal:</h1>
        <div id="main">
          {/*<div id="sidebar-nav" className="link-section">
            <h5>Filter:</h5>
            <ul>
              <li>
                <Link>#Baking</Link>,
              </li>
              <br/>
              <li>
                <Link>#Bread</Link>,
              </li>
              <br/>
              <li>
                <Link>#Miso</Link>,
              </li>
              <br/>
              <li>
                <Link>#Chicken</Link>
              </li>
            </ul>
          </div>*/}
          <div id="feedContainer">
            <div id="feed">
              <InfiniteScroll
                dataLength={cookingPosts.length}
                next={loadNextPage}
                inverse={false}
                hasMore={true}
              >
                {
                  denode(cookingPosts).map((post) => ( post.matchesTags != false ?
                    (<div className="post">
                      <div className="heroImage">
                        {/*<img src={urlBuilder(post.image)}/>*/}
                        <Img fluid={post.image.asset.fluid}></Img>
                      </div>
                      <div className="postText">
                        <h1 className="title">{post.title}</h1>
                        <div className="postDetails">
                          <h6 className="date">{ dateString((post.date != null) ? (new Date(post.date + " UTC")) : (new Date(post._createdAt))) }</h6>
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
                          <CopyToClipboard text={`${props.location.origin}/cooking/${post.slug.current}`}>
                            <span className="LinkCopier">Copy Link to Post</span>
                          </CopyToClipboard>
                        </div>
                        <div className="postBody">
                          <BlockContent blocks={post.body._rawBlocks} serializers={serializers}/>
                        </div>
                      </div>
                    </div>) : ""
                  ))
                }
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookingPage

export const query = graphql`
  {
    paginatedCollectionPage(
      collection: { name: { eq: "allSanityCookingPostPaginated" } }
      index: { eq: 0 }
    ) {
      nodes
      hasNextPage
      nextPage {
        id
      }
      collection {
        id
      }
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


// export const query = graphql`
//   query {
//     allSanityCookingPost {
//       edges {
//         node {
//           body {
//             _rawBlocks(resolveReferences: {maxDepth: 10})
//           }
//           color
//           date
//           image {
//             asset {
//               id
//               metadata {
//                 dimensions {
//                   height
//                   width
//                 }
//               }
//               _id
//             }
//             crop {
//               top
//               bottom
//               left
//               right
//             }
//             hotspot {
//               x
//               y
//             }
//           }
//           slug {
//             current
//           }
//           title
//           tags {
//             name {
//               current
//             }
//           }
//           _createdAt
//         }
//       }
//     }
//   }
// `
