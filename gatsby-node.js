/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        posts: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      // result.data.posts.edges.map(({ node }) => {
      //   createPage({
      //     path: node.fields.slug,
      //     component: path.resolve('./src/Components/Blog/bloglist.js'),
      //     context: {
      //       slug: node.fields.slug,
      //     },
      //   })
      // })
      resolve()
    })
  })
}
