import React, { useState } from 'react'
import { ORDER_MUTATION, ORDERS_QUERY } from '../gql/common'
import { useMutation } from '@apollo/react-hooks'

const OrderForm = () => {
  const [addOrder, { data }] = useMutation(ORDER_MUTATION)
  const [OrderName, setOrderName] = useState('')
  const [Quantity, setQuantity] = useState(0)

  const handleSubmit = event => {
    event.preventDefault()

    addOrder({
      variables: { OrderName, Quantity },
      refetchQueries: [{ query: ORDERS_QUERY }]
    }).then(res => {
      console.log(
        `Order with id ${res.data.createOrder.id} added successfully.`
      )
    })
    //addOrder()
    setOrderName('')
    setQuantity(0)
    console.log(OrderName)
    console.log(Quantity)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={OrderName}
        onChange={e => setOrderName(e.target.value)}
        placeholder="Order Name"
        required
      />
      <br />
      <input
        type="number"
        value={Quantity}
        onChange={e => setQuantity(Number(e.target.value))}
        placeholder="Order Quantity"
        required
      />

      <br />
      <button type="submit">Add Order</button>
    </form>
  )
}

export default OrderForm
