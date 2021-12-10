import styled from 'styled-components'

export const Container = styled.div`

  @media only screen and (min-width: 768px){
    display: grid;
    grid-template-columns: 25% 75%;
  }

  @media only screen and (min-width: 1024px){
    grid-template-columns: 1fr 50% 1fr;
  }
`
