import { useEffect } from 'react'
import { useInputValidation } from '../../hooks/InputValidation/use-inputValidation'

import { Input } from '../Input/Input'

export const SoupDetails = ({ onSubmitOrderDetails }) => {
  const {
    value: spicinessScale,
    changeInputValueHandler: changeSpicinessScaleHandler,
  } = useInputValidation(() => {})

  useEffect(() => {
    onSubmitOrderDetails({
      spiciness_scale: Number(spicinessScale) || 1,
    })
  }, [spicinessScale, onSubmitOrderDetails])

  return (
    <Input
      id="spiciness_scale"
      title={`Spiciness scale (${spicinessScale || 1})`}
      type="range"
      min={1}
      max={10}
      step={1}
      value={spicinessScale || 1}
      onChange={changeSpicinessScaleHandler}
    />
  )
}
