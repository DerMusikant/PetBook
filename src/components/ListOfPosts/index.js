import React from 'react'

import { Post } from '../Post'
import { Ul } from './styles'


export const ListOfPosts = ( {data} ) => {

  if(data){
    return (
      <Ul>
        {
          data.photos.map(photo => <Post key={ photo.id} {...photo}/>)
        }
      </Ul>
    )
  }
  return <Post />
  }
