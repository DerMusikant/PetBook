import React from 'react'
import {Link} from 'react-router-dom'

import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ id, cover = DEFAULT_IMAGE, emoji = '?' }) => (
  <Link to={`/pet/${id}`}>
    {emoji}
    <Image src={cover} />
  </Link>
)
