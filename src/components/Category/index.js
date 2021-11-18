import React from 'react'
import {Link} from 'react-router-dom'

import { Container, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ id, name, cover = DEFAULT_IMAGE, emoji = '?' }) => (
  <Link to={`/pet/${id}`}>
    <Container>
      <Image src={cover} />
      <p> {emoji} </p> {name}
    </Container>
  </Link>
)
