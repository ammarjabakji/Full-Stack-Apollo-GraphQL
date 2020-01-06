import { gql } from 'apollo-server-express'

import orderSchema from './order'

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`

export default [linkSchema, orderSchema]
