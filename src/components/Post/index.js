import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { Container } from './styles'

const getCategories = gql`
  query getCategories {
    categories {
      id
      name
      emoji
      cover
    }
  }
`


export const Post = ( { categoryId, src, userId, likes } ) => {

  const { loading, error, data } = useQuery(getCategories);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // This s#!t won't allow me to query by id with Graphql >:|

  const category = data.categories.find(el => el.id == categoryId)

  return(
    <Container>
      <div>
        <img src={category.cover} /> {category.name} {category.emoji}
      </div>
      <div>
        <img src={src} />
      </div>
      <div>
        <div>
          Likes: {likes}
        </div>
        <div>
          Give a like
        </div>
      </div>
    </Container>
  )
}
