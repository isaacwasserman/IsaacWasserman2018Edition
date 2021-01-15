/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Isaac Wasserman',
    description: 'The Portfolio of Isaac Wasserman'
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `buildData`,
        path: `${__dirname}/public/buildData`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/resources/images`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `rxa1mevp`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    {
      resolve: 'gatsby-plugin-paginated-collection',
      options: {
        name: 'allSanityCookingPostPaginated',
        pageSize: 1,
        query: `
        {
          allSanityCookingPost(sort: {fields: date, order: DESC}) {
            edges {
              node {
                id
                body {
                  _rawBlocks(resolveReferences: {maxDepth: 10})
                }
                date
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
            }
          }
        }
        `,
        normalizer: ({ data }) =>
          data.allSanityCookingPost.edges.map(node => (node))
      }
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,`gatsby-source-sanity-transform-images`],
}
