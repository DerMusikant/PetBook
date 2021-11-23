import React, { useState} from 'react'
import {MdThumbUpOffAlt} from 'react-icons/md'

import { LikeButton, Icon} from './styles'

export const Like = ( { mutation, id }) => {

  const handleClick = () => {
    mutation({ variables: { input: { id }}})
  }

  return(
            <LikeButton onClick={handleClick}>
              <Icon>
                <MdThumbUpOffAlt />
              </Icon>
              Like
            </LikeButton>
  )
}
