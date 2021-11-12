import React, { useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

import { Container } from './styles'

const getCategories = gql`
  query getCategories {
    categories {
      id
      name
      emoji
      cover
    }
  }
`


export const Post = ( { id, categoryId, src, userId, likes } ) => {

  const [element, setElement] = useState(null)
  const [show, setShow] = useState(false)
  let observer

  const callback = (entries) => {
    if(entries[0].isIntersecting){
      setShow(true)
      observer.disconnect()
    }
  }

  useEffect( () => {
    if (element){
      observer = new window.IntersectionObserver(callback)
      observer.observe(element)
    }
  }, [element])

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
    <Container ref={ el => { setElement(el) } }>

      {
        show &&
        <>
          <Link to={`/detail=${id}`}>
            <div>
              <img src={category.cover} /> {category.name} {category.emoji}
            </div>
            <div>
              <img src={src} />
            </div>
            <div>
              <div>
                Likes: {likes}
              </div>
            </div>
            <div>
            Give a like
            </div>
          </Link>
        </>
      }

    </Container>
  )
}
