import React from 'react'
import { useParams } from 'react-router-dom'

import { ListOfPostsContainer } from '../container/ListOfPostsContainer'

export default () => {

  return (
    <>
        <main>
          <ListOfPostsContainer categoryId={useParams().id} />
        </main>
    </>
    )
  }
