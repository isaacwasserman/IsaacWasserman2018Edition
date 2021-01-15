const fs = require('fs')
const path = require('path');

exports.createPages = async gatsbyContext => {
  const { graphql } = gatsbyContext

  const queryResult = await graphql(`
    {
      paginatedCollection(name: { eq: "allSanityCookingPostPaginated" }) {
        id
        pages {
          id
          nodes
          hasNextPage
          nextPage {
            id
          }
        }
      }
      taggedPosts: allSanityCookingPost {
        edges {
          node {
            tags {
              name {
                current
              }
            }
          }
        }
      }
    }
  `)

  console.log(queryResult)
  const collection = queryResult.data.paginatedCollection
  let dir = path.join(__dirname, 'public', 'paginated-data', collection.id)
  fs.mkdirSync(dir, { recursive: true })

  for (const page of collection.pages)
    fs.writeFileSync(
      path.resolve(dir, `${page.id}.json`),
      JSON.stringify(page),
    )

  let taggedPosts = queryResult.data.taggedPosts.edges
  let counts = {}
  for(var post of taggedPosts){
    for(var tag of post.node.tags){
      if(!(tag.name.current in counts)){
        counts[tag.name.current] = 0
      }
      counts[tag.name.current]++
    }
  }

  dir = path.join(__dirname, 'public', 'buildData')
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.resolve(dir, 'cookingTagFrequencies.json'), JSON.stringify({frequenciesString: `${JSON.stringify(counts)}`}))
}
