import React from 'react'
import { Helmet } from '../components/Helmet'

import { LikedWithQuery } from '../container/LikedWithQuery'

export default () => {

  return (
      <>
        <Helmet title='Liked Posts' subtitle='These are your favorite cuties!'>
          <LikedWithQuery />
        </Helmet>
      </>
  )
  }
