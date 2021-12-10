import React from 'react'
import {useQuery} from '@apollo/client'

import { getCategories } from '../../hoc/getCategories'

import { Category } from '../Category'
import { Ul } from './styles'


export const ListOfCategories = () => {

  // Fetching data with react apollo

  const { loading, error, data } = useQuery(getCategories);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <Category />;
  }


  return (
      <Ul>
        {
          data.categories.map( category => <Category key={ category.id} {...category}/>)
        }
      </Ul>
    )
  }
