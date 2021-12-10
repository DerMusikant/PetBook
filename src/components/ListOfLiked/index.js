import React from 'react'

import { Link } from 'react-router-dom'

import { Img, Grid } from './styles'
export const ListOfLiked = ( { favs = [] }) => {
  return (
    <Grid>
      {favs.map( fav => <div key={fav.id}><Link to={`/detail=${fav.id}`}><Img src={fav.src} /></Link></div>)}
    </Grid>
)
}
