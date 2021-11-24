import { useQuery, gql } from '@apollo/client'
import React from 'react'
import {ListOfLiked} from '../components/ListOfLiked'

const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const LikedWithQuery = () => {
    const { loading, data, error } = useQuery(GET_FAVORITES, {
        fetchPolicy: 'cache-and-network'
      })
      if(loading) return <p>Loading...</p>
      if(error) return <p>Error...</p>
      const {favs} = data

      return <ListOfLiked favs={favs} />
}
