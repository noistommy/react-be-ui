import { useState } from 'react'

interface BeSwitchProps {
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  type?: 'slide' | 'button' | 'button-slide';
  inside?: boolean;
  round?: boolean;
  onText?: string;
  offText?: string;
  color?: string | null;
  checked?: boolean;
  disabled?: boolean;
}

const BeSwitch = ({
  children,
  onChange = () => {},
  ...props
}: BeSwitchProps): JSX.Element => {
  const {
    type = 'slide',
    inside = false,
    round = false,
    onText = 'ON',
    offText = 'OFF',
    color = null,
    checked = false,
    disabled = false
  } = props

  const [switchValue, setSwitchValue] = useState(checked)

  const setClass: string = [
    type,
    inside && 'inside',
    round && 'round',
    color,
    disabled && 'disabled'
  ].filter((item): item is string => Boolean(item)).join(' ')

  const handleChange = () => {
    const newValue = !switchValue
    setSwitchValue(newValue);
    onChange(newValue);
  }

  return (
    <div className={`be-switch ${setClass}`} onClick={handleChange}>
      <input 
        type="checkbox" 
        onChange={handleChange}
        checked={switchValue}
      />
      {type === 'slide' ? (
        <div className="switch"></div>
      ) : (
        <>
          {children || (
            <>
              <span className={`on ${switchValue && 'active'}`}>{onText}</span>
              <span className={`off ${!switchValue && 'active'}`}>{offText}</span>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default BeSwitch