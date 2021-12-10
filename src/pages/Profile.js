import React, { useContext } from 'react'
import { Context } from '../Context'
import { Helmet } from '../components/Helmet'
import { Button } from '../components/UserForm/styles'

export default () => {

  const { removeAuth } = useContext(Context)

  return (
    <Helmet title='Profile' subtitle='Leaving so soon? 😿'>
      <div>
          <h2>Profile</h2>
          <Button onClick={removeAuth} type='button' value='Log out' />
      </div>
    </Helmet>
    )
  }
