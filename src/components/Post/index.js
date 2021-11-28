import React, { useState} from 'react'
import {MdThumbUpOffAlt, MdThumbUp} from 'react-icons/md'
import { Link } from 'react-router-dom'

import { ToggleLikeMutation as Like } from '../../container/ToggleLikeMutation'
import { useLazyLoading } from '../../hooks/useLazyLoading'
import { getSingleCategory } from '../../hoc/getSingleCategory'
import { Container, Photo, Profile, ProfilePic, Pic, Icon, Likes} from './styles'


const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const Post = ( { id, liked, categoryId, src = DEFAULT_IMAGE, userId, likes = 0 } ) => {

  const [show, element] = useLazyLoading();
  const category = getSingleCategory(categoryId)

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
                {category.name}
                <p>
                {category.emoji}
                </p>
              </Profile>
            </Link>
            <div>
            <Link to={`/detail=${id}`}>
              <Photo src={src} />
            </Link>
            </div>
            <Likes>
                <MdThumbUp /> {likes}
            </Likes>
            <Like id={id}/>
        </>
      }

    </Container>
  )
}
