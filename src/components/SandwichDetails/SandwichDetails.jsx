import { useEffect } from 'react'
import { useInputValidation } from '../../hooks/InputValidation/use-inputValidation'

import { Input } from '../Input/Input'
import { isPositiveIntegers } from '../../validations/PositiveIntegersValidation/positiveIntegers'

export const SandwichDetails = ({ onSubmitOrderDetails }) => {
  const {
    value: breadCount,
    isValid: isValidBreadCount,
    hasError: hasErrorBreadCount,
    changeInputValueHandler: changeBreadCountHandler,
    blurInputValueHandler: blurBreadCountHandler,
  } = useInputValidation(isPositiveIntegers)

  const isValidOrderDetails = isValidBreadCount

  useEffect(() => {
    if (isValidOrderDetails) {
      onSubmitOrderDetails({
        slices_of_bread: Number(breadCount),
      })
    } else {
      onSubmitOrderDetails(null)
    }
  }, [isValidOrderDetails, breadCount, onSubmitOrderDetails])

  return (
    <Input
      id="bread-count"
      title="Number of bread slices"
      type="number"
      min={1}
      value={breadCount}
      onChange={changeBreadCountHandler}
      onBlur={blurBreadCountHandler}
      hasError={hasErrorBreadCount}
      errorMessage="Please, enter valid Number of bread slices!"
    />
  )
}
