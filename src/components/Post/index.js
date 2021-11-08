import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { Container } from './styles'

const categories = gql`
  query getCategories {
    categories {
      id
      name
      emoji
      cover
    }
  }
`


export const Post = ( { id, categoryId, src, userId, likes } ) => {

  const { loading, error, data } = useQuery(categories);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const category = data.categories.find(el => el.id == categoryId)

  return(
    <Container>
      <div>
        {category.name}
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
