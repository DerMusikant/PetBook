import React from 'react'
import { useQuery } from '@apollo/client'

import { ListOfPosts } from '../components/ListOfPosts'
import { getPhotos } from '../hoc/getPhotos'


export const ListOfPostsContainer = ( {categoryId }) => {

  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId: categoryId} });

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <ListOfPosts />;
  }

  return(
    < ListOfPosts data={data} />
  )
}
