import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

export const Helmet = ({children, title, subtitle}) => {
  return (
    <>
      <ReactHelmet>
        { title && <title>{title} | Petbook 😸</title>}
        { subtitle && <meta name='description' content={subtitle} />}
      </ReactHelmet>
      {children}
    </>
  )
}
