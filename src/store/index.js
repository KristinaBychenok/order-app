import { configureStore } from '@reduxjs/toolkit'

import { orderSlice } from './order/order-slice'

export const store = configureStore({
  reducer: { order: orderSlice.reducer },
})
