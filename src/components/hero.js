import React from 'react'
import styles from './hero.module.css'

import Img from 'gatsby-image'

export default ({ data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt=""
      sizes={{
        ...data.heroImage.sizes,
        base64: data.heroImage.sqip.dataURI,
      }}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio ? data.shortBio.shortBio : data.subtitle}</p>
    </div>
  </div>
)
