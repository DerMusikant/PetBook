import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  html{
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: white;
  }

  ul, li, h1, h2, h3, p {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  a{
    font: inherit;
    text-decoration: none;
  }

  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #18191a;
    overflow: hidden;
    z-index: -1;
  }
`
