import React, {useContext} from 'react'
import { Context } from '../Context'
import { Helmet } from '../components/Helmet'

import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export default () => {
  const { activateAuth } = useContext(Context)
  return (
    <Helmet title='Login' subtitle='Welcome to PetBook! Please, come inside!'>
      <div>
        <RegisterMutation onSubmit={activateAuth} />
        <LoginMutation onSubmit={activateAuth} />
      </div>
    </Helmet>
  )
}
