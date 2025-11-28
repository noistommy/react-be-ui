
import BeCheckbox from './BeCheckbox'
import { useState } from 'react'

const BeCheckboxGroup = ({
  children,
  onChange = () => {},
  className = '',
  // { name, label, state }
  checkboxList = [],
  checkedList = []
}) => {
  const [selectedList, setSelectedList] = useState(checkedList)



  const handleSelect = (name, checked) => {
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
    <div className={`be-checkbox-group ${className}`}>
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