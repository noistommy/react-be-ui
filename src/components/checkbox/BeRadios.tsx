import BeCheckbox from './BeCheckbox'

import { useState } from 'react'

const BeRadios = ({
  children,
  className = '',
  onChange = () => {},
  ...props
}) => {
  const {
    group = '',
    radioList = [],
    selectedValue = '',
    ...rest
  } = props

  const [selected, setSelected] = useState(selectedValue)

  const handleChange = (e) => {
    const { id, checked } = e.target
    if (checked) {
      setSelected(id)
      onChange(id)
    }
  }

  return (
    <div className={`be-radio ${className}`} {...rest}>
      {children || (
        <>
          {radioList.map(option => (
            <BeCheckbox
              type="radio"
              inputType="radio"
              key={option.name}
              name={option.name}
              group={group}
              checked={selected === option.name} 
              onChange={handleChange}
            >
              {option.label || option.name}
            </BeCheckbox>
          ))}
        </>
      )}
    </div>
  )
}

export default BeRadios
