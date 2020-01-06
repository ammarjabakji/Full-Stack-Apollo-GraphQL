import React from 'react'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import './App.css'
import OrdersList from './components/OrdersList'
import OrderForm from './components/OrderForm'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">Orders App 🚀</header>
      <OrderForm />
      <OrdersList />
    </div>
  </ApolloProvider>
)

export default App

// client
//   .query({
//     query: gql`
//       {
//         getOrders {
//           id
//           orderName
//           quantity
//         }
//       }
//     `
//   })
//   .then(result => console.log(result))
