import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {GlobalStyle} from './GlobalStyle'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Liked } from './pages/Liked'
import { Profile } from './pages/Profile'
import { NotRegistered } from './pages/NotRegistered'
import Context from './Context'


export const App = () => {

  return (
    <>
      <GlobalStyle />
        <Router>
        <Layout>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/pet/:id' element={ <Home /> } />
            <Route path='/detail=:id' element={ <Details />} />
          </Routes>
          <Context.Consumer>
          {
            ({isAuth}) =>
              isAuth ?
              <Routes>
                <Route path='/liked' element={<Liked />} />
                <Route path='/profile' element={<Profile/>} />
              </Routes>
              :
              <Routes>
                <Route path='/liked' element={<NotRegistered />} />
                <Route path='/profile' element={<NotRegistered/>} />
              </Routes>
          }
          </Context.Consumer>
          </Layout>
        </Router>
    </>
  )
}
