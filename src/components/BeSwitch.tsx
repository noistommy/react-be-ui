interface BeSwitchProps {
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  className?: string;
  name?: string;
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
  className = '',
  onChange = () => {},
  ...props
}: BeSwitchProps): JSX.Element => {
  const {
    name = '',
    type = 'slide',
    inside = false,
    round = false,
    onText = 'ON',
    offText = 'OFF',
    color = null,
    checked = false,
    disabled = false
  } = props

  const setClass: string = [
    type,
    inside && 'inside',
    round && 'round',
    color,
    disabled && 'disabled'
  ].filter((item): item is string => Boolean(item)).join(' ')

  const handleChange = () => {
    const newValue = !checked
    onChange(name, newValue);
  }

  return (
    <div key={name} className={`be-switch ${className} ${setClass}`} onClick={handleChange}>
      <input 
        type="checkbox" 
        checked={checked}
        onChange={handleChange}
      /> 
      {type === 'slide' ? (
        <div className="switch"></div>
      ) : (
        <>
          {children || (
            <>
              <span className={`on ${checked && 'active'}`}>{onText}</span>
              <span className={`off ${!checked && 'active'}`}>{offText}</span>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default BeSwitch