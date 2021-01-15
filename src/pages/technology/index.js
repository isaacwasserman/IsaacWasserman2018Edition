import React, { Component } from 'react'
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from '../../resources/css/technology.css';

import Header from '../../components/header.js'
import Dimensional from '../../components/dimensional.js'
import denode from '../../helpers/denode.js'

function TechnologyPage({data}){
  let projects = denode(data.projects.edges)
  console.log(projects)
  let projectElements = projects.map((project, index) => (
    <Link className="project" to={`/technology/${project.slug.current}`}>
      <Dimensional key={index} height={250} width={400} offset={10} hoverOffset={10} color={"#ddd"}>
          <Img fluid={project.thumbnail.asset.fluid}></Img>
          <h3 className="title">{project.title}</h3>
      </Dimensional>
      <div className="project-no-dimension">
        <Img fluid={project.thumbnail.asset.fluid}></Img>
        <h3 className="title-no-dimension">{project.title}</h3>
      </div>
    </Link>
  ))
  console.log(projects[0].thumbnail.asset.fluid)
  return (
    <div>
      <Header/>
      {/*<Img fixed={projects[0].thumbnail.asset.localFile.childImageSharp.fixed}></Img>*/}
      <main>
        <h1>Tech Projects:</h1>
        <section id="projects">
          {projectElements}
        </section>
      </main>
    </div>
  )
}

export const query = graphql`
  query {
    projects: allSanityTechProject {
      edges {
        node {
          title
          slug {
            current
          }
          id
          thumbnail {
            asset {
              fluid(maxHeight: 250, maxWidth: 400) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`

export default TechnologyPage;
