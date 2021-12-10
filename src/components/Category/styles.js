import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px;
  @media only screen and (min-width: 768px){
    flex-direction: row;
  }
  &:hover {
    background-color: #3a3b3c;
  }
`
export const Image = styled.img`
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height: 50px;
  width: 50px;
`
