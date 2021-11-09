import { gql } from '@apollo/client'

//Not a higher order component tho...

export const getPhotos = gql`
  query getPhotos($categoryId: ID){
    photos(categoryId: $categoryId){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
