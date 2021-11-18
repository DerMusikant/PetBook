import React from 'react'
import { Link } from 'react-router-dom'
import { MdFavoriteBorder, MdOtherHouses, MdAccountCircle } from "react-icons/md"

import { Logo, Container, NavBarLink, AccountName, Account } from './styles'

export const Header = ( props ) => (
        <Container>
          <Link to='/'>
            <Logo>
              p
            </Logo>
          </Link>
          <div>
            <NavBarLink to='/'>
                <MdOtherHouses />
            </NavBarLink>
            <NavBarLink to='/liked'>
                <MdFavoriteBorder />
            </NavBarLink>
          </div>
          <NavBarLink to='/profile'>
          <Account>
            <MdAccountCircle />
            <AccountName>
              Profile
            </AccountName>
            </Account>
          </NavBarLink>
        </Container>
  )
