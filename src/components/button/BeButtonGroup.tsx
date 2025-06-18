import {BeButtonProps} from '../../types'
import BeButton from './BeButton'

import {useState } from 'react'

interface BeButtonProps {
  children: React.ReactNode;
  buttons: BeButtonProps[];
  border?: boolean;
  outline?: boolean;
  selectIndex: number;
}


const BeButtonGroup = ({
  children,
  buttons = null,
  border = false,
  outline = false,
  selectIndex = 0
}: BeButtonProps): JSX.Element => {
  const [selected, setSelected] = useState(selectIndex)
  const handleSelect = (e) => {
    const idx = buttons.findIndex(t => t.contentText === e.target.textContent)
    setSelected(idx)
  }
  return (
    <div className={`be-buttons ${border ? 'border' : ''} ${outline ? 'outline' : ''}`}>
      {children || (
        <>
          {buttons.map((b, i) => (
            <BeButton 
              props={b} 
              selected={selected === i}
              onClick={handleSelect}
            >{b.contentText}</BeButton>
          ))}
        </>
      )}
    </div>
  )
}

export default BeButtonGroup