import { Fragment, useMemo } from 'react'
import { useSelector } from 'react-redux'
import classes from './OrderConfirmation.module.css'
import { Modal } from '../UI/Modal/Modal'
import ClipLoader from 'react-spinners/ClipLoader'

export const OrderConfirmation = (props) => {
  const isLoading = useSelector((state) => state.order.isLoading)
  const order = useSelector((state) => state.order.order)

  const orderDetails = useMemo(() => {
    if (order.type === 'pizza') {
      return (
        <Fragment>
          <p
            className={classes.order_inf}
          >{`Number of pizza slices: ${order.no_of_slices}`}</p>
          <p
            className={classes.order_inf}
          >{`Pizza diameter: ${order.diameter}cm`}</p>
        </Fragment>
      )
    }
    if (order.type === 'soup') {
      return (
        <p
          className={classes.order_inf}
        >{`Spiciness scale: ${order.spiciness_scale}`}</p>
      )
    }
    if (order.type === 'sandwich') {
      return (
        <p
          className={classes.order_inf}
        >{`Number of bread slices: ${order.slices_of_bread}`}</p>
      )
    }
  }, [order])

  return (
    <Modal onClose={props.onClose}>
      <h3 className={classes.confirmation}>Your order is accepted!</h3>
      <ClipLoader loading={isLoading} size={25} />
      {isLoading ? (
        <p>Loading your order...</p>
      ) : (
        <div className={classes.order_container}>
          <p className={classes.order_title}>Your order:</p>
          <p
            className={classes.order_inf}
          >{`Your ${order.type} name: ${order.name}`}</p>
          {orderDetails}
          <p
            className={classes.order_inf}
          >{`Preparation time: ${order.preparation_time}`}</p>
        </div>
      )}
    </Modal>
  )
}
