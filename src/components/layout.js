import React from 'react'
import Container from './container'
import Navigation from './navigation'

import './base.css'

const Template = ({ children }) => (
  <Container>
    <Navigation />
    {children}
  </Container>
)

export default Template
