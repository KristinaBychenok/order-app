import classes from './Select.module.css'

export const Select = (props) => {
  const {
    id,
    title,
    value,
    onChange,
    onBlur,
    options,
    hasError,
    errorMessage,
  } = props

  return (
    <div className={classes.container}>
      <label htmlFor={id} className={classes.label}>
        {title}
      </label>
      <div className={classes.select_container}>
        <select
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={classes.select}
        >
          <option disabled></option>
          {options.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        {hasError && <p className={classes.error}>{errorMessage}</p>}
      </div>
    </div>
  )
}
