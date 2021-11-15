import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { getSinglePhoto } from '../../hoc/getSinglePhoto'
import { Post } from '../../components/Post'


export const SinglePostWithQuery = () => {

  const { id } = useParams()

  // Fetching data with react apollo

  const { loading, error, data } = useQuery(getSinglePhoto, {
      variables: {
        id: id
      }
    })

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return(
      <Post {...data.photo} />
  )
}
