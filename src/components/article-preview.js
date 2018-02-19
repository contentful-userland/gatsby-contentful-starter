import React from 'react'
import styles from './article-preview.module.css'
import Link from 'gatsby-link'

export default ({ article }) => (
  <div className={styles.preview}>
    <img src={`${article.heroImage.file.url}?fit=scale&w=350&h=196`} alt="" />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
