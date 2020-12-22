import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import styles from './hero.module.css'

const Hero = ({ data }) => (
  <div className={styles.hero}>
    <GatsbyImage
      image={data.heroImage.gatsbyImageData}
      className={styles.heroImage}
      alt={data.name}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)

export default Hero
