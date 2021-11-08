import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {GlobalStyle} from './GlobalStyle'

import { Layout } from './components/Layout'
import { Home } from './components/Home'

export const App = () => (
    <>
      <GlobalStyle />
      <Layout>
        <Router>
          <Routes>
            <Route path='/' element={ <Home /> } />
          </Routes>
        </Router>
      </Layout>
    </>
  )
