import React from 'react'
import {useRegisterMutation} from '../hooks/useRegisterMutation'
import { UserForm } from '../components/UserForm'

export const RegisterMutation = ( { onSubmit }) => {

  const formSubmit = ( input ) => {
    const variables = { input }
    mutation( {variables} ).then(onSubmit)
  }
  
  const mutation = useRegisterMutation()

  return (
    <UserForm onSubmit={ formSubmit } title='Register'/>
  )
}
