import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.contentful.blogPostCollection.items')
    const author = get(this, 'props.data.contentful.person')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map((node) => {
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
}

export default RootIndex

// TODO: sorting
// TODO: date formatting
export const pageQuery = graphql`
  query HomeQuery {
    contentful {
      blogPostCollection {
        items {
          title
          slug
          publishDate
          tags
          heroImage {
            file {
              url
            }
          }
          description
        }
      }

      person(id: "15jwOBqpxqSAOy2eOO4S0m") {
        name
        shortBio
        title
        heroImage: image {
          file {
            url
          }
        }
      }
    }
  }
`
