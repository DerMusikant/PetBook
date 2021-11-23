import React from 'react'
import Context from '../Context'

import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegistered = () => {

  return (
    <Context.Consumer>
      {
        ( { activateAuth } ) => {
          return(
          <div>
            <RegisterMutation onSubmit={activateAuth} />
            <LoginMutation onSubmit={activateAuth} />
          </div>
          )
        }
      }
    </Context.Consumer>
    )
  }
