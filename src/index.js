//Libraries
import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client"
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
//Components
import {App} from './App'
import Context from './Context'

//Setting AppolloClient to use petgram api

//We need this to connect to the api
const httpLink  = createHttpLink ({
  uri: 'https://petgram-server-clgg.vercel.app/graphql'
})

//This is where the fun begins
const authLink = setContext ((_, { headers }) => { // get the authentication token from local storage if it exists
  const token = window.sessionStorage.getItem('token') // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

//And here we finally use all of the above
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: onError(
    ({ networkError }) => {
      if (networkError && networkError.result.code === 'invalid_token') {
        window.sessionStorage.removeItem('token')
        window.location.href = '/'
      }
    }
  )
})



render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  , document.querySelector('#root'))
