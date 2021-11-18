import React from 'react'
import { useQuery } from '@apollo/client'

import { getCategories } from './getCategories'


export const getSingleCategory = (categoryId) => {

// Fetching data with react apollo
const { error, loading, data } = useQuery(getCategories)


  if(error){
    return <h2>error</h2>
  }

  //If i don't include !categoryId this crashes
  if (loading || !categoryId){
    return {name: 'Loading...' , emoji: '🥰', cover: 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg' }
  }

  // This s#!t won't allow me to query by id with Graphql >:|
    return data.categories.find(el => el.id == categoryId)
}
