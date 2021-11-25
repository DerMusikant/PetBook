import React, { useContext, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import {GlobalStyle} from './GlobalStyle'

import { Layout } from './components/Layout'
import { Context } from './Context'


const Home = React.lazy(() => import('./pages/Home'))
const Details = React.lazy(() => import('./pages/Details'))
const Liked = React.lazy(() => import('./pages/Liked'))
const Profile = React.lazy(() => import('./pages/Profile'))
const NotRegistered = React.lazy(() => import('./pages/NotRegistered'))


export const App = () => {

  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div>Loading</div>} >
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
    </Suspense>
  )
}
