
import BeCheckbox from './BeCheckbox'
import { useState } from 'react'

const BeCheckboxGroup = ({
  children,
  onChange = () => {},
  className = '',
  ...props
}) => {
  const {
    checkboxList = [],
    checkedList = [],
    ...rest
  } = props
  const [selectedList, setSelectedList] = useState(checkedList)



  const handleSelect = (e) => {
    const { name, checked } = e.target
    const newSetList = new Set(selectedList)
    if (checked) {
      newSetList.add(name)
    } else {
      newSetList.delete(name)
    }
    setSelectedList([...newSetList])
    onChange([...newSetList])
  }

  return (
    <div className={`be-checkbox-group ${className}`} {...rest}>
      {children || (
        <>
          {checkboxList.map(item => (
            <BeCheckbox 
              key={item.name} 
              name={item.name} 
              onChange={handleSelect}
              checked={selectedList.includes(item.name)}
            >
              {item.label || item.name}
            </BeCheckbox>
          ))}
        </>
      )}
    </div>
  )
}

export default BeCheckboxGroup