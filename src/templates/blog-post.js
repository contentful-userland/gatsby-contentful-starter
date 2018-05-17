import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styles from './blog-post.module.css'
import Hero from '../components/hero'
import Img from 'gatsby-image'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <Hero
          data={{
            ...post,
            title: null,
          }}
        />
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sqip(
          numberOfPrimitives: 100
          blur: 0
          width: 1180
          background: "rgb:000000"
        ) {
          dataURI
        }
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
