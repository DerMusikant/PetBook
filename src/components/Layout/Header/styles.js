import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  margin: 10px;
  background-color: blue;
  border-radius: 50%;
  color: white;
  font-size: 2.2rem;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
`
export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #242526;
  position: sticky;
  top: 0;
`

export const NavBarLink = styled(NavLink)`
  padding: 7px 15px 7px 15px;
  margin: 0 5px 0 5px;
  font-size: 2rem;
  &[aria-current]{
    border-bottom: 3px solid blue;
  }
  &:not([aria-current]):hover{
      background-color: #3a3b3c;
      border-radius: 10px;
  }
`

export const Account = styled.div`
  Display: flex;
  align-items: center;
`

export const AccountName = styled.div`
  font-size: 1rem;
`
