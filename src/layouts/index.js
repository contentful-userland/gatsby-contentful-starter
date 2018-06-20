import React from 'react'
import base from './base.css'
import Container from '../components/container'
import Navigation from '../components/navigation'
import Overlay from '../components/overlay';

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
        <Overlay id={'all'} />
        <Navigation />
        {children()}
      </Container>
    )
  }
}

export default Template
