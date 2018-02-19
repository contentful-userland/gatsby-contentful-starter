import React from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import Container from '../components/container'
import Navigation from '../components/navigation'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navigation />
        {children()}
      </Container>
    )
  }
}

export default Template
