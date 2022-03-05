import { useState } from 'react'

export const useInputValidation = (validateValue) => {
  const [inputValue, setInputValue] = useState('')
  const [isInputValueBlur, setIsInputValueBlur] = useState(false)

  const valueIsValid = validateValue(inputValue)
  const hasError = isInputValueBlur && !valueIsValid

  const changeInputValueHandler = (event) => {
    setInputValue(event.target.value)
  }
  const blurInputValueHandler = () => {
    setIsInputValueBlur(true)
  }
  const resetInputValueHandler = () => {
    setInputValue('')
    setIsInputValueBlur(false)
  }

  return {
    value: inputValue,
    isValid: valueIsValid,
    hasError,
    changeInputValueHandler,
    blurInputValueHandler,
    resetInputValueHandler,
  }
}
