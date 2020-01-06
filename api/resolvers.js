import { Orders } from './db'

// resolver map
export const resolvers = {
  Query: {
    getOrders: () => {
      return Orders.find()
    },
    getOneOrder: (root, { id }) =>
      new Promise((resolve, object) => {
        Orders.findById(id, (err, order) => {
          if (err) reject(err)
          else resolve(order)
        })
      })
  },
  Mutation: {
    createOrder: (root, { input }) => {
      const newOrder = new Orders({
        orderName: input.orderName,
        quantity: input.quantity
      })
      newOrder.id = newOrder._id
      return new Promise((resolve, object) => {
        newOrder.save(err => {
          if (err) reject(err)
          else resolve(newOrder)
        })
      })
    },
    updateOrder: (root, { input }) =>
      new Promise((resolve, object) => {
        Orders.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (err, order) => {
            if (err) reject(err)
            else resolve(order)
          }
        )
      }),
    deleteOrder: (root, { id }) =>
      new Promise((resolve, object) => {
        Orders.remove({ _id: id }, err => {
          if (err) reject(err)
          else resolve('Successfully deleted order')
        })
      })
  }
}

export default resolvers
