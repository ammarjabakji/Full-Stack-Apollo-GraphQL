import gql from 'graphql-tag'

export const ORDERS_QUERY = gql`
  {
    getOrders {
      id
      orderName
      quantity
    }
  }
`

export const ORDER_MUTATION = gql`
  mutation createOrder($OrderName: String!, $Quantity: Int!) {
    createOrder(input: { orderName: $OrderName, quantity: $Quantity }) {
      id
      orderName
      quantity
    }
  }
`
