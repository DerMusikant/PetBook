import React, { useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { useLazyLoading } from '../../hooks/useLazyLoading'
import { getCategories } from '../../hoc/getCategories'
import { Container, Photo, Profile, ProfilePic, Pic, Like } from './styles'



export const Post = ( { id, categoryId, src, userId, likes } ) => {

  const [show, element] = useLazyLoading();

  // Fetching data with react apollo

  const { loading, error, data } = useQuery(getCategories);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // This s#!t won't allow me to query by id with Graphql >:|

  const category = data.categories.find(el => el.id == categoryId)

  return(
    <Container ref={element}>

      {
        show &&
        <>
            <Link to={`/pet/${category.id}`}>
              <Profile>
                <ProfilePic>
                  <Pic src={category.cover} />
                </ProfilePic>
                <p>
                  {category.name} {category.emoji}
                </p>
              </Profile>
            </Link>
            <Link to={`/detail=${id}`}>
            <Photo src={src} />
            <div>
              <div>
                Likes: {likes}
              </div>
            </div>
            </Link>
            <Like>
            Give a like
            </Like>
        </>
      }

    </Container>
  )
}
