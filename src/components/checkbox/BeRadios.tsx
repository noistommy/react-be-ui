import BeCheckbox from './BeCheckbox'

import { useState } from 'react'

const BeRadios = ({
  children,
  onChange = () => {},
  group = '',
  optionsList = [],
  selectedValue = ''
}) => {

  const [selected, setSelected] = useState(selectedValue)

  const handleChange = (name, checked) => {
    console.log(name, checked)
    if (checked) {
      setSelected(name)
      onChange(selected)
    }
  }

  return (
    <div className="be-radio">
      {children || (
        <>
          {optionsList.map(option => (
            <BeCheckbox
              type="radio"
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
