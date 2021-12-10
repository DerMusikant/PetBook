import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  margin: 5px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  justify-items: center;
  align-items: center;

  @media only screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`
