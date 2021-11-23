import React from 'react'
import {useRegisterMutation} from '../hooks/useRegisterMutation'
import { UserForm } from '../components/UserForm'

export const RegisterMutation = ( { onSubmit }) => {

  const formSubmit = ( input ) => {
    const variables = { input }
    mutation( {variables} ).then(({data}) => onSubmit(data.signup))
  }

  const { mutation, error, loading } = useRegisterMutation()

  return (
    <UserForm onSubmit={ formSubmit } disabled={loading} error={error} title='Register'/>
  )
}
