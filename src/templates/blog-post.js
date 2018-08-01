import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import heroStyles from '../components/hero.module.css'
import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentful.blogPostCollection.items[0]')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <img className={heroStyles.heroImage} alt={post.title} src={post.heroImage.file.url} />
          </div>
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
                __html: post.body,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

// TODO: date formatting
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentful {
      blogPostCollection(where: { slug: $slug }, limit: 1) {
        items {
          title
          publishDate
          heroImage {
            file {
              url
            }
          }
          body
        }
      }
    }
  }
`
