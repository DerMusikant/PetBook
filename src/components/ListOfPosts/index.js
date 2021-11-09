import React from 'react'

import { Post } from '../Post'
import { Ul } from './styles'


export const ListOfPosts = ( {data} ) => (
    <Ul>
      {
        data.photos.map(photo => <Post key={ photo.id} {...photo} categoryId={photo.categoryId}/>)
      }
    </Ul>
  )
