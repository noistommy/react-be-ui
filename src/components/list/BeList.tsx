import { useState } from 'react'

interface optionItem {
  id?: string | number;
  option: string;
  image?: string;
  sub?: string;
  icon?: string;
}

const BeList = ({
  children,
  className = '',
  onChange = () => {},
  options = [],
  selection = false,
  selectedType = 'bg',
  icon = false,
  image = false,
  border = false,
  itemClass = ''
}: {
  children?: React.ReactNode;
  className?: string;
  onChange?: (value: optionItem) => void;
  options?: optionItem[];
  selection?: boolean
  selectedType?: string;
  icon?: boolean;
  image?: boolean;
  border?: boolean;
  itemClass?: string;
}): JSX.Element => {

  const [selectItem, setSelectItem] = useState(null)

  const setClass = [
    selection && 'selection',
    border && 'border',
    selectedType
  ].filter((item): item is string => Boolean(item)).join(' ')

  const handleSelect = (value: optionItem) => {
    setSelectItem(value)
    onChange(value)
  }

  return (
    <div className={`be-list ${className} ${setClass}`}>
      {children || (
        <>
          {options.map(opt => (
            <div 
              key={opt.id || opt.option} 
              className={`item ${itemClass} ${(selectItem && selectItem.option === opt.option ) ? 'selected' : ''}`}
              // style={{padding: '10px'}}
              onClick={() => handleSelect(opt)}
            >
              {image ? (
                <div className="item-img">
                  {opt.image && (<img src={opt.image} alt={opt.option} />)}
                </div>
              ): icon ? (
                <i className={`icon list-icon ${opt.icon}`} />
              ): null}
              <div className="item-title">
                {opt.option}
                {opt.sub && (
                  <div className="sub-title">{opt.sub}</div>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default BeList