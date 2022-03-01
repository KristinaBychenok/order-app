import { configureStore } from '@reduxjs/toolkit'

import ordersSlice from './orders/orders-slice'

const store = configureStore({
  reducer: { orders: ordersSlice.reducer },
})

export default store
