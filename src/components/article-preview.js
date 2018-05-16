import React from 'react'
import styles from './article-preview.module.css'
import Link from 'gatsby-link'

export default class ArticlePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  componentDidMount() {
    window.addEventListener("message", (e) => {
      // we assume slug won't change in import script
      if (e.data && e.data.id === this.props.article.slug) {
        if (e.data.message === 'highlight') {
          this.setState({ active: true });
        } else if (e.data.message === 'remove') {
          this.setState({ active: false });
        }
      }
    }, false);
  }

  render() {
    const { active } = this.state;
    const { article } = this.props;

    return (
      <div className={styles.preview} ref={node => this.el = node}>
        <div className={`${styles.overlay} ${active ? styles.active : ''}`} />
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
    );
  }
}
