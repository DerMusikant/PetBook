import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {GlobalStyle} from './GlobalStyle'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { SinglePostWithQuery } from './container/SinglePostWithQuery'

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router>
          <Routes>
            <Route path='/detail=:id' element={ <SinglePostWithQuery />} />
            <Route exact path='/' element={ <Home /> } />
          </Routes>
        </Router>
      </Layout>
    </>
  )
}
