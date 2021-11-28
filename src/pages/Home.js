import React from 'react'
import { useParams } from 'react-router-dom'
import {Helmet } from '../components/Helmet'

import { ListOfPostsContainer } from '../container/ListOfPostsContainer'

export default () => {

  return (
    <>
      <Helmet title='Home' subtitle='Welcome to PetBook, where you can find cute pet pics!'>
        <main>
          <ListOfPostsContainer categoryId={useParams().id} />
        </main>
      </Helmet>
    </>
    )
  }
