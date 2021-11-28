import React from 'react'

import {Container} from './styles'

import {Header} from './Header'
import {LeftSide} from './LeftSide'
import {RightSide} from './RightSide'

const LayoutComponent = ( props ) => (
        <>
        <Header />
        <Container>
          <LeftSide />
          {props.children}
          <RightSide />
        </Container>
        </>
  )

export const Layout = React.memo(LayoutComponent)
