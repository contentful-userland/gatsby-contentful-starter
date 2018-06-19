import React from 'react'
import styles from './article-preview.module.css'
import Link from 'gatsby-link'
import Overlay from './overlay';

export default class ArticlePreview extends React.Component {
  render() {
    const { article } = this.props;
    return (
      <div className={styles.preview} ref={node => this.el = node}>
        <Overlay id={article.slug} />
        <img src={`${article.heroImage.file.url}?fit=scale&w=350&h=196`} alt="" />
        <h3 className={styles.previewTitle}>
          <Link to={'/'}>{article.title}</Link>
        </h3>
        <small>{article.publishDate}</small>
        <p className={styles.description}
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
      </div>
    );
  }
}
