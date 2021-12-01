import styled from 'styled-components'
import { FaDragon } from 'react-icons/fa'

export const Sider = styled.div`
  height: min-content;
  position: sticky;
  top: 61px;
  padding: 20px;
`

export const Adds = styled.div`
  border-bottom: 1px solid #3a3b3c;
  padding-bottom: 10px;
`

export const Add = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 5px;
  border-radius: 5px;
  &:hover{
    background-color: #3a3b3c;
  }
`

export const Icon = styled(FaDragon)`
  width: 40%;
  height: 70px;
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: red;
`

export const Img = styled.img`
width: 40%;
margin-right: 10px;
border-radius: 5px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`
export const Sub = styled.p`
  color: gray;
  font-size: 0.8rem;
`
