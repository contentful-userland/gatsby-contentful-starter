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
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
            gatsbyImageData(
              layout: FLUID
              maxWidth: 350
              maxHeight: 196
              resizingBehavior: SCALE
              placeholder: TRACED_SVG
            )
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
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              placeholder: TRACED_SVG
              # background: "rgb:000000"
            )
            fluid(maxWidth: 1180, maxHeight: 480, resizingBehavior: PAD) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
