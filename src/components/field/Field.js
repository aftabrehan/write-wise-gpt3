import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Field.module.scss'

const Field = ({
  name,
  type = 'text',
  label = 'Name',
  placeholder,
  disabled,
  readOnly,
  formik,
  autoCapitalize = true,
  autoComplete = false,
  spellCheck = false,
  autoFocus = false,
  about = 'Put your name here',
  onKeyDown,
  radius,
  customClass,
  inputClass,
}) => {
  const { handleChange, handleBlur, errors, touched, values } = formik

  return (
    <div className={clsx(stl.fieldContainer, customClass)}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        style={{ borderRadius: `${radius}px` }}
        className={clsx(
          stl.input,
          errors[name] && touched[name] && stl.errorField,
          values[name] && stl.isValue,
          inputClass
        )}
        spellCheck={spellCheck}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        autoCapitalize={autoCapitalize ? 'on' : 'off'}
        autoFocus={autoFocus}
        autoComplete={autoComplete ? 'on' : 'off'}
        title={about}
      />
      <label className={stl.label} htmlFor={name}>
        {label}
      </label>
      {errors[name] && touched[name] && (
        <span className={stl.fieldErrorText}>{formik.errors[name]}</span>
      )}
    </div>
  )
}

Field.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  formik: PropTypes.object,
  autoCapitalize: PropTypes.bool,
  autoComplete: PropTypes.bool,
  spellCheck: PropTypes.bool,
  autoFocus: PropTypes.bool,
  about: PropTypes.string,
  onKeyDown: PropTypes.func,
  radius: PropTypes.number,
  customClass: PropTypes.string,
  inputClass: PropTypes.string,
}

export default Field
