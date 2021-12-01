import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'

import { Form, Input, Button, Title } from './styles'

export const UserForm = ( { onSubmit, title, disabled, error } ) => {

  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = ( e ) => {
    e.preventDefault()
    //For some reason i can't just use it on the form's onSubmit...
    onSubmit({email: email.value , password: password.value})
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Title>{title}</Title>
      {error && `${error}`}
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input disabled={disabled} type="password" placeholder="Password" {...password} />
        <Button disabled={disabled} type='submit' value={title} />
    </Form>
  )
}
