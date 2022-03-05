import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { orderActions } from '../../store/order/order-slice'
import { postOrder } from '../../store/order/order-actions'
import { useInputValidation } from '../../hooks/InputValidation/use-inputValidation'

import classes from './OrderForm.module.css'
import { Card } from '../UI/Card/Card'
import { Input } from '../Input/Input'
import { Select } from '../Select/Select'
import { isNotEmpty } from '../../validations/notEmptyValidation/notEmpty'
import { timeValidation } from '../../validations/timeValidation/timeValidation'
import { PizzaDetails } from '../PizzaDetails/PizzaDetails'
import { SoupDetails } from '../SoupDetails/SoupDetails'
import { SandwichDetails } from '../SandwichDetails/SandwichDetails'

const dishItems = ['pizza', 'soup', 'sandwich']
const MASK = 1e16

export const OrderForm = (props) => {
  const dispatch = useDispatch()
  const {
    value: dishName,
    isValid: isValidDishName,
    hasError: hasErrorDishName,
    changeInputValueHandler: changeDishNameHandler,
    blurInputValueHandler: blurDishNameHandler,
    resetInputValueHandler: resetDishNameHandler,
  } = useInputValidation(isNotEmpty)

  const {
    value: dishTime,
    isValid: isValidDishTime,
    hasError: hasErrorDishTime,
    changeInputValueHandler: changeDishTimeHandler,
    blurInputValueHandler: blurDishTimeHandler,
    resetInputValueHandler: resetDishTimeHandler,
  } = useInputValidation(timeValidation)

  const {
    value: dishType,
    isValid: isValidDishType,
    hasError: hasErrorDishType,
    changeInputValueHandler: changeDishTypeHandler,
    blurInputValueHandler: blurDishTypeHandler,
    resetInputValueHandler: resetDishTypeHandler,
  } = useInputValidation(isNotEmpty)

  const [isValidOrderDetails, setIsValidOrderDetails] = useState(false)
  const [orderDetails, setOrderDetails] = useState({})

  const submitOrderDetailsHandler = (orderDetailsData) => {
    if (orderDetailsData) {
      setIsValidOrderDetails(true)
      setOrderDetails(orderDetailsData)
    } else {
      setIsValidOrderDetails(false)
      setOrderDetails(orderDetailsData)
    }
  }

  const isFormValid =
    isValidDishName && isValidDishTime && isValidDishType && isValidOrderDetails

  const submitOrderFormHandler = (event) => {
    event.preventDefault()

    if (!isFormValid) {
      return
    }

    dispatch(
      postOrder({
        name: dishName,
        preparation_time: dishTime,
        type: dishType,
        ...orderDetails,
        id: Date.now() + '-' + Math.round(Math.random() * MASK),
      })
    )
    resetDishNameHandler()
    resetDishTimeHandler()
    resetDishTypeHandler()
    props.onConfirm()
  }

  const buttonClasses = isFormValid
    ? `${classes.submit} ${classes.valid}`
    : `${classes.submit} ${classes.invalid}`

  const orderDetailsType = useMemo(() => {
    if (dishType === 'pizza') {
      return <PizzaDetails onSubmitOrderDetails={submitOrderDetailsHandler} />
    }
    if (dishType === 'soup') {
      return <SoupDetails onSubmitOrderDetails={submitOrderDetailsHandler} />
    }
    if (dishType === 'sandwich') {
      return (
        <SandwichDetails onSubmitOrderDetails={submitOrderDetailsHandler} />
      )
    }
  }, [dishType])

  return (
    <Card>
      <form className={classes.order_form} onSubmit={submitOrderFormHandler}>
        <Input
          id="dish_name"
          title="Dish Name"
          type="text"
          value={dishName}
          onChange={changeDishNameHandler}
          onBlur={blurDishNameHandler}
          hasError={hasErrorDishName}
          errorMessage="Please, enter Dish Name!"
        />
        <Input
          id="dish_time"
          title="Preparation time"
          type="time"
          step={1}
          value={dishTime}
          onChange={changeDishTimeHandler}
          onBlur={blurDishTimeHandler}
          hasError={hasErrorDishTime}
          errorMessage="Please, enter Preparation time!"
        />
        <Select
          id="dish_type"
          title="Dish type"
          value={dishType}
          onChange={changeDishTypeHandler}
          onBlur={blurDishTypeHandler}
          options={dishItems}
          hasError={hasErrorDishType}
          errorMessage="Please, choose dish type!"
        />
        {orderDetailsType}
        <div className={classes.button_container}>
          <button className={buttonClasses}>Order</button>
        </div>
      </form>
    </Card>
  )
}
