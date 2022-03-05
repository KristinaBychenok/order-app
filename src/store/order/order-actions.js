import { createAsyncThunk } from '@reduxjs/toolkit'
import { orderPost } from '../../services/orderService'

export const postOrder = createAsyncThunk(
  'order/postOrderStatus',
  async (order) => {
    try {
      const response = await orderPost(order)
      return response.data
    } catch (err) {
      console.error(err)
    }
  }
)
