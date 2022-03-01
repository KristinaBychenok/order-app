import { createSlice } from '@reduxjs/toolkit'

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
  },
  reducers: {
    replaceOrdersStore(state, action) {
      state.orders = action.payload
    },
  },
})

export const ordersActions = ordersSlice.actions

export default ordersSlice
