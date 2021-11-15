import { gql } from '@apollo/client'


export const getCategories = gql`
  query getCategories {
    categories {
      id
      name
      emoji
      cover
    }
  }
`
