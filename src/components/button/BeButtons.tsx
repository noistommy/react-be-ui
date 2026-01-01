import {BeButtonProps} from '../../types'
import BeButton from './BeButton'

import {useState } from 'react'

interface BeButtonProps {
  children: React.ReactNode;
  className: string;
  buttons: BeButtonProps[];
  border?: boolean;
  round?: boolean;
  selectIndex: number;
}


const BeButtons = ({
  children,
  onChange = () => {},
  className = '',
  buttons = null,
  border = false,
  round = false,
  selectIndex = 0
}: BeButtonProps): JSX.Element => {
  const [selected, setSelected] = useState(selectIndex)
  const handleSelect = (idx) => {
    // const idx = buttons.findIndex(t => t.contentText === e.target.textContent)
    setSelected(idx)
    onChange(idx, buttons[idx])
  }
  return (
    <div className={`be-buttons ${className} ${border ? 'border' : ''} ${round ? 'round' : ''}`}>
      {children || (
        <>
          {buttons.map((b, i) => (
            <BeButton 
              key={`btn-${i}`}
              {...b} 
              selected={selected === i}
              onClick={() => handleSelect(i)}
            ></BeButton>
          ))}
        </>
      )}
    </div>
  )
}

export default BeButtons