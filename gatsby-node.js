const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            contentful {
              blogPostCollection {
                items {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.contentful.blogPostCollection.items
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.slug}/`,
            component: blogPost,
            context: {
              slug: post.slug
            },
          })
        })
      })
    )
  })
}
