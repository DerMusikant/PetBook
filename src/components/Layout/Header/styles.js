import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  margin: 10px;
  background: linear-gradient(180deg, rgba(1,102,225,1) 35%, rgba(0,212,255,1) 100%);
  border-radius: 50%;
  font-size: 2.5rem;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: end;
  overflow: hidden;
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
    border-bottom: 3px solid #2374e1;
    background-color: #263951;
  }
  &:not([aria-current]):hover{
    border-radius: 10px;
      background-color: #3a3b3c;
  }
`

export const Account = styled.div`
  Display: flex;
  align-items: center;
`

export const AccountName = styled.div`
  font-size: 1rem;
`
