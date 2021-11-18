import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ( { onSubmit } ) => {

  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = () => {
    //For some reason i can't just use in on the form's onSubmit...
    onSubmit()
  }

  return(
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" {...email} />
      <input type="password" placeholder="Password" {...password} />
      <input type='submit' value='Log in' />
    </form>
  )
}
