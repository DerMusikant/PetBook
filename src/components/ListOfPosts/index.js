import React from 'react'

import { useQuery, gql } from '@apollo/client'

import { Post } from '../Post'

import { Ul } from './styles'

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPosts = () => {

  const { loading, error, data } = useQuery(withPhotos);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return(
    <Ul>
      {
        data.photos.map(photo => <Post key={ photo.id} {...photo} categoryId={photo.categoryId}/>)
      }
    </Ul>
  )
}
