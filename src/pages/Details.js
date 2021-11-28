import React from 'react'
import { Helmet } from '../components/Helmet'

import { SinglePostWithQuery } from '../container/SinglePostWithQuery'


export default () => {

  return(
    <Helmet title='Details' subtitle='Yo check out this specific post.'>
      <main>
        <SinglePostWithQuery/>
      </main>
    </Helmet>
  )
}
