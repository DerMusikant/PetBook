import styled from 'styled-components'

export const Sider = styled.div`
  display: flex;
  height: min-content;
  width: 100%;
  overflow: scroll;
  position: sticky;
  top: 61px;
  background-color: #18191a;
  z-index: 10;

  @media only screen and (min-width: 768px){
    overflow: visible;
  }
`
