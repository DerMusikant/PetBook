import React from 'react'
import {useLoginMutation} from '../hooks/useLoginMutation'
import { UserForm } from '../components/UserForm'

export const LoginMutation = ( { onSubmit }) => {

  const formSubmit = ( input ) => {
    const variables = { input }
    mutation( {variables} ).then(onSubmit)
  }

  const { mutation, error, loading } = useLoginMutation()

  return (
    <UserForm onSubmit={ formSubmit } disable={loading} error={error} title='Login'/>
  )
}
