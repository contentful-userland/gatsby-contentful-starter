import React from 'react'
import Img from "gatsby-image";
import styles from './hero.module.css'

export default ({ person }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      sizes={{
        ...person.node.image.responsiveSizes,
        base64: person.node.image.sqip
      }}
      alt=""
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{person.node.name}</h3>
      <p className={styles.heroTitle}>{person.node.title}</p>
      <p>{person.node.shortBio.shortBio}</p>
    </div>
  </div>
)
