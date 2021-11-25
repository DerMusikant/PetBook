import React, {useContext} from 'react'
import { Context } from '../Context'

import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export default () => {
  const { activateAuth } = useContext(Context)
  return (
    <div>
    <RegisterMutation onSubmit={activateAuth} />
    <LoginMutation onSubmit={activateAuth} />
    </div>
  )
}
