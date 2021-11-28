import styled from 'styled-components'
import { FaDragon } from 'react-icons/fa'

export const Sider = styled.div`
  height: min-content;
  position: sticky;
  top: 61px;
  padding: 20px;
`
export const Add = styled.div`
  display: flex;
  margin-top: 20px;
`

export const Icon = styled(FaDragon)`
  width: 40%;
  height: 70px;
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: red;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
