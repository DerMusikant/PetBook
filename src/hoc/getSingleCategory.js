import { useQuery } from '@apollo/client'

import { getCategories } from './getCategories'


export async function getSingleCategory(categoryId) {

// Fetching data with react apollo

const { data } = await useQuery(getCategories)

// This s#!t won't allow me to query by id with Graphql >:|

if(data){
  return data.categories.find(el => el.id == categoryId)
}
}
