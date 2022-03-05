import { createSlice } from '@reduxjs/toolkit'
import { postOrder } from './order-actions'

export const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    order: {},
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.order = action.payload
      })
  },
})

export const orderActions = orderSlice.actions
