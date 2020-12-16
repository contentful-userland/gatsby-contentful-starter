import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
