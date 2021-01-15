import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

const RootIndex = ({ data }) => {
  const siteTitle = data?.site?.siteMetadata?.title
  const posts = data?.allContentfulBlogPost?.edges
  const [author] = data?.allContentfulPerson?.edges

  console.log({ author, posts, data })

  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero data={author.node} />
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            gatsbyImageData(
              layout: FIXED
              width: 350
              height: 196
              resizingBehavior: SCALE
              placeholder: TRACED_SVG
            )
            description
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            gatsbyImageData(
              layout: FLUID
              width: 1180
              height: 480
              #@todo replace width & height with upcoming aspect ratio
              #aspectRatio: 0.4
              resizingBehavior: PAD
              placeholder: TRACED_SVG
              background: "rgb:000000"
            )
          }
        }
      }
    }
  }
`
