import React from 'react'
import Context from '../Context'

import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegistered = () => {

  return (
    <Context.Consumer>
      {
        ( { activateAuth } ) => {
          return <RegisterMutation onSubmit={activateAuth} />
        }
      }
    </Context.Consumer>
    )
  }
