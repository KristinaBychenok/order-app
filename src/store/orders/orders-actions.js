import { ordersActions } from './orders-slice'

export const fetchOrdersData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://frosty-wood-6558.getsandbox.com:443/dishes'
      )

      if (!response.ok) {
        throw new Error('Could not fetch orders data!')
      }

      const data = await response.json()

      return data
    }

    try {
      const ordersData = await fetchData()
      dispatch(ordersActions.replaceOrdersStore(ordersData))
    } catch (err) {
      console.log('Could not fetch users data!')
    }
  }
}
