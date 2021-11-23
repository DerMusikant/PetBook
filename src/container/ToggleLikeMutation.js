import React from 'react'

import {Like} from '../components/Like'

import { useLikeMutation } from '../hooks/useLikeMutation'


export const ToggleLikeMutation = ( { id } ) => {

  const { mutation } = useLikeMutation()

  return <Like mutation={mutation} id={id} />
}
