import React from 'react'

import {GlobalStyle} from './GlobalStyle'

import { Layout } from './components/Layout'
import { Home } from './components/Home'

export const App = () => (
    <>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </>
  )
