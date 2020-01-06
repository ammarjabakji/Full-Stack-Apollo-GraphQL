import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'

import typeDefs from './api/schema'

import resolvers from './api/resolvers'

const app = express()
//app.use(cors())
const PORT = 4000

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  // cors: true,
  playground: {
    settings: {
      'editor.theme': 'light'
    }
  }
})

SERVER.applyMiddleware({ app /* cors: true */ })

app.listen(PORT, () =>
  console.log(
    '🚀 GraphQL playground is running at http://localhost:4000/graphql'
  )
)
