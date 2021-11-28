import React, { useContext } from 'react'
import { Context } from '../Context'
import { Helmet } from '../components/Helmet'

export default () => {

  const { removeAuth } = useContext(Context)

  return (
    <Helmet title='Profile' subtitle='Leaving so soon? 😿'>
      <div>
          <h2>Profile</h2>
          <button onClick={removeAuth}>Log out</button>
      </div>
    </Helmet>
    )
  }
