import React, { useState} from 'react'
import { Link } from 'react-router-dom'

import { useLazyLoading } from '../../hooks/useLazyLoading'
import { getSingleCategory } from '../../hoc/getSingleCategory'
import { Container, Photo, Profile, ProfilePic, Pic, Like } from './styles'


const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const Post = ( { id, categoryId, src = DEFAULT_IMAGE, userId, likes = 0 } ) => {

  const [category, setCategory] = useState({})
  const [show, element] = useLazyLoading();
  if (categoryId) { getSingleCategory(categoryId).then(response => setCategory(response)) }

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
