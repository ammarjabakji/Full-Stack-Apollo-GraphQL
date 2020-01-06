import mongoose from 'mongoose'
import { mongoURI } from '../.env'

// Mongo connection
mongoose.Promise = global.Promise
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    // Exit process with failure
    process.exit(1)
  }
}
connectDB()

const orderSchema = new mongoose.Schema({
  orderName: {
    type: String
  },
  quantity: {
    type: Number
  }
})

const Orders = mongoose.model('orders', orderSchema)

export { Orders }
