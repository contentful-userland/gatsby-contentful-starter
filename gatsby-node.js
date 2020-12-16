const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for Contentful blog post nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each Contentful blog post entry.
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    const { slug } = node
    const path = `/blog/${slug}/`
    createPage({
      path,
      component: blogPostTemplate,
      context: {
        pagePath: path,
        slug
      },
    })
  })
}
