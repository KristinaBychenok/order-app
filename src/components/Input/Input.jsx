import classes from './Input.module.css'

export const Input = (props) => {
  const {
    id,
    title,
    type,
    min,
    max,
    step,
    value,
    onChange,
    onBlur,
    hasError,
    errorMessage,
  } = props

  return (
    <div className={classes.container}>
      <label htmlFor={id} className={classes.label}>
        {title}
      </label>
      <div className={classes.input_container}>
        <input
          id={id}
          type={type}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={classes.input}
        />
        {hasError && <p className={classes.error}>{errorMessage}</p>}
      </div>
    </div>
  )
}
