import BeCheckbox from './BeCheckbox'

import { useState } from 'react'

const BeRadios = ({
  children,
  className = '',
  onChange = () => {},
  group = '',
  radioList = [],
  selectedValue = ''
}) => {

  const [selected, setSelected] = useState(selectedValue)

  const handleChange = (name, checked) => {
    if (checked) {
      setSelected(name)
      onChange(name)
    }
  }

  return (
    <div className={`be-radio ${className}`}>
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
