import { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'

import { OrderConfirmation } from '../OrderConfirmation/OrderConfirmation'
import { OrderForm } from '../OrderForm/OrderForm'
// import { fetchOrdersData } from './store/orders/orders-actions'

export const OrderSection = () => {
  const [orderConfirmation, setOrderConfirmation] = useState(false)
  //   const dispatch = useDispatch()
  //   const orders = useSelector((state) => state.orders.orders)

  //   const getOrders = () => {
  //     dispatch(fetchOrdersData())
  //     console.log(orders)
  //   }

  //   getOrders()

  const openConfitmationWindowHandler = () => {
    setOrderConfirmation(true)
  }
  const closeConfitmationWindowHandler = () => {
    setOrderConfirmation(false)
  }

  return (
    <section className="order_section">
      {!orderConfirmation && (
        <OrderForm onConfirm={openConfitmationWindowHandler} />
      )}
      {orderConfirmation && (
        <OrderConfirmation onClose={closeConfitmationWindowHandler} />
      )}
    </section>
  )
}
