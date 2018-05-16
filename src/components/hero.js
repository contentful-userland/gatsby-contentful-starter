import React from 'react'
import styles from './hero.module.css'

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  componentDidMount() {
    window.addEventListener("message", (e) => {
      // we are totally cool with person, since we are sure
      // there will be only one person
      if (e.data && e.data.id === 'person') {
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
    const { person } = this.props;
    return (
      <div className={styles.hero}>
    <img
      className={styles.heroImage}
      src={`${person.node.image.file.url}?w=1180&h=600&fit=pad&bg=rgb:000000`}
      alt=""
    />
    <div className={styles.heroDetails}>
    <div className={`${styles.overlay} ${active ? styles.active : ''}`} />
      <h3 className={styles.heroHeadline}>{person.node.name}</h3>
      <p className={styles.heroTitle}>{person.node.title}</p>
      <p>{person.node.shortBio.shortBio}</p>
    </div>
  </div>
    );
  }
}
