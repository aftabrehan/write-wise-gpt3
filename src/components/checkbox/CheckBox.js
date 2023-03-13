import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './CheckBox.module.scss'

const CheckBox = ({ label = 'CheckBox', customClass }) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className={clsx(stl.checkbox, customClass)}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label>{label}</label>
    </div>
  )
}

CheckBox.propTypes = {
  label: PropTypes.string,
  customClass: PropTypes.string,
}

export default CheckBox
