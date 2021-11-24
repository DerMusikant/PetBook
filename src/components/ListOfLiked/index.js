import React from 'react'

import { Link } from 'react-router-dom'

import { Img, Grid } from './styles'
export const ListOfLiked = ( { favs = [] }) => {
  return (
    <Grid>
      {favs.map( fav => <Link key={fav.id} to={`/detail=${fav.id}`}><Img src={fav.src} /></Link>)}
    </Grid>
)
}
