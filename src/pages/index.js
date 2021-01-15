import React, { Component } from 'react'
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from '../resources/css/home.css';


const HomePage = ({data}) => (
  <div>
    <div id="cutout"><Img fluid={data.cutout.childImageSharp.fluid}></Img></div>
    <div id="text-container">
      <h1 id="name">Isaac<br/>Wasserman</h1>
      <h3 id="first-link-section" className="link-section">
        <span><Link to="/technology">Technologist</Link></span>, <br/>
        <span><Link to="/photography">Photographer</Link></span>,
        <br/><span><Link to="/cooking">Chef</Link></span>.
      </h3>
    </div>
  </div>
)

export const query = graphql`
  query {
    cutout: file(relativePath: { eq: "Cutout.png" }) {
      childImageSharp {
        fluid(maxWidth: 1929) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default HomePage;
