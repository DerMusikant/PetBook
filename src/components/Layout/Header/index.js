import React from 'react'
import { Link } from 'react-router-dom'

import { Logo, Head } from './styles'

export const Header = ( props ) => (
        <Head>
          <Link to='/'>
            <Logo>
              p
            </Logo>
          </Link>
        </Head>
  )
