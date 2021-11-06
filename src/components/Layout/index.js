import React from 'react'

import {Container} from './styles'

import {Header} from './Header'
import {LeftSide} from './LeftSide'
import {RightSide} from './RightSide'

export const Layout = ( props ) => (
        <>
        <Header />
        <Container>
          <LeftSide />
          {props.children}
          <RightSide />
        </Container>
        </>
  )
