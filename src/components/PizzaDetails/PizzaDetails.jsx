import { Fragment, useEffect } from 'react'
import { useInputValidation } from '../../hooks/InputValidation/use-inputValidation'

import { Input } from '../Input/Input'
import { isPositiveIntegers } from '../../validations/PositiveIntegersValidation/positiveIntegers'
import { diameterValidation } from '../../validations/diameterValidation/diameterValidation'

export const PizzaDetails = ({ onSubmitOrderDetails }) => {
  const {
    value: pizzaCount,
    isValid: isValidPizzaCount,
    hasError: hasErrorPizzaCount,
    changeInputValueHandler: changePizzaCountHandler,
    blurInputValueHandler: blurPizzaCountHandler,
  } = useInputValidation(isPositiveIntegers)

  const {
    value: pizzaDiameter,
    isValid: isValidPizzaDiameter,
    hasError: hasErrorPizzaDiameter,
    changeInputValueHandler: changePizzaDiameterHandler,
    blurInputValueHandler: blurPizzaDiameterHandler,
  } = useInputValidation(diameterValidation)

  const isValidOrderDetails = isValidPizzaCount && isValidPizzaDiameter

  useEffect(() => {
    if (isValidOrderDetails) {
      onSubmitOrderDetails({
        no_of_slices: Number(pizzaCount),
        diameter: Number(pizzaDiameter),
      })
    } else {
      onSubmitOrderDetails(null)
    }
  }, [isValidOrderDetails, pizzaCount, pizzaDiameter, onSubmitOrderDetails])

  return (
    <Fragment>
      <Input
        id="pizza_count"
        title="Number of slices"
        type="number"
        min={1}
        value={pizzaCount}
        onChange={changePizzaCountHandler}
        onBlur={blurPizzaCountHandler}
        hasError={hasErrorPizzaCount}
        errorMessage="Please, enter valid Number of pizza slices!"
      />
      <Input
        id="pizza_diameter"
        title="Pizza diameter (20-40cm)"
        type="number"
        min={20}
        max={40}
        step={0.1}
        value={pizzaDiameter}
        onChange={changePizzaDiameterHandler}
        onBlur={blurPizzaDiameterHandler}
        hasError={hasErrorPizzaDiameter}
        errorMessage="Please, enter valid Pizza diameter (20-40cm)!"
      />
    </Fragment>
  )
}
