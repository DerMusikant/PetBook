import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import {GlobalStyle} from './GlobalStyle'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Liked } from './pages/Liked'
import { Profile } from './pages/Profile'
import { NotRegistered } from './pages/NotRegistered'
import { Context } from './Context'


export const App = () => {

  const { isAuth } = useContext(Context)

  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/pet/:id' element={ <Home /> } />
            <Route path='/detail=:id' element={ <Details />} />
            <Route path='/liked' element={ isAuth ? <Liked /> : <Navigate replace to='/login'/> } />
            <Route path='/profile' element={ isAuth ? <Profile /> : <Navigate replace to='/login'/> } />
            <Route path='/login' element={isAuth ? <Navigate replace to='/' /> : <NotRegistered />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}
