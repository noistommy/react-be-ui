import {BeButtonProps} from '../../types'
import BeButton from './BeButton'

import {useState } from 'react'

interface BeButtonProps {
  children: React.ReactNode;
  buttons: BeButtonProps[];
  border?: boolean;
  round?: boolean;
  selectIndex: number;
}


const BeButtons = ({
  children,
  buttons = null,
  border = false,
  round = false,
  selectIndex = 0
}: BeButtonProps): JSX.Element => {
  const [selected, setSelected] = useState(selectIndex)
  const handleSelect = (e) => {
    const idx = buttons.findIndex(t => t.contentText === e.target.textContent)
    setSelected(idx)
  }
  return (
    <div className={`be-buttons ${border ? 'border' : ''} ${round ? 'round' : ''}`}>
      {children || (
        <>
          {buttons.map((b, i) => (
            <BeButton 
              key={`btn-${i}`}
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

export default BeButtons