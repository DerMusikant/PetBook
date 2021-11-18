//Libraries
import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
//Components
import {App} from './App'
import Context from './Context'

const client = new ApolloClient({
  uri: "https://petgram-server-clgg.vercel.app/graphql",
  cache: new InMemoryCache()
})


render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  , document.querySelector('#root'))
