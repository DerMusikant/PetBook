import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ( { onSubmit, title, disabled, error } ) => {

  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = ( e ) => {
    e.preventDefault()
    //For some reason i can't just use in on the form's onSubmit...
    onSubmit({email: email.value , password: password.value})
  }

  return(
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {error && 'Error'}
      <input disabled={disabled} placeholder="Email" {...email} />
      <input disabled={disabled} type="password" placeholder="Password" {...password} />
      <input disabled={disabled} type='submit' value={title} />
    </form>
  )
}
