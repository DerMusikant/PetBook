import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ( { onSubmit, title } ) => {

  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = ( e ) => {
    e.preventDefault()
    //For some reason i can't just use in on the form's onSubmit...
    onSubmit({email: email.value , password: password.value})
  }

  return(
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" {...email} />
      <input type="password" placeholder="Password" {...password} />
      <input type='submit' value={title} />
    </form>
  )
}
