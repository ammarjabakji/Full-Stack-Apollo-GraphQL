import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const OrdersQuery = gql`
  {
    getOrders {
      id
      orderName
      quantity
    }
  }
`
// const UPDATE_ORDERS = gql`
//   mutation updateOrders($OrderName: String!, $Quantity: Int!) {
//     updateOrders(input: { orderName: $OrderName, quantity: $Quantity }) {
//       id
//       orderName
//       quantity
//     }
//   }
// `;

const OrdersList = () => {
  const { loading, error, data } = useQuery(OrdersQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  //console.log(data)

  return data.getOrders.map(({ id, orderName, quantity }) => (
    <div key={id}>
      <p>
        {orderName}: {quantity} Items
      </p>
    </div>
  ))
}

export default OrdersList
