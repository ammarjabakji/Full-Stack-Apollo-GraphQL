import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Order {
    id: ID
    orderName: String
    quantity: Int
  }
  extend type Query {
    getOneOrder(id: ID!): Order
    getOrders: [Order]
  }

  input OrderInput {
    id: ID
    orderName: String!
    quantity: Int
  }

  extend type Mutation {
    createOrder(input: OrderInput): Order
    updateOrder(input: OrderInput): Order
    deleteOrder(id: ID!): String
  }
`

export default typeDefs
