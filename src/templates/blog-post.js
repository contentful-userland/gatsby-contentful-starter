import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

const BlogPostTemplate = ({ data }) => {
  const post = data?.contentfulBlogPost
  const siteTitle = data?.site?.siteMetadata?.title

  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className={heroStyles.hero}>
          <GatsbyImage
            className={heroStyles.heroImage}
            alt={post.title}
            image={post.heroImage.gatsbyImageData}
          />
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
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
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
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
