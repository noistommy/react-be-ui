import { ChangeEvent } from 'react'

interface BeCheckBoxProps {
  children?: React.ReactNode;
  className?: string;
  onChange?: (checked: boolean) => void;
  type?: 'checkbox' | 'radio';
  inputType?: 'checkbox' | 'radio';
  group?: string;
  name: string;
  labelText?: string;
  indeter?: boolean;
  checked?: boolean;
}

const BeCheckBox = ({
  children,
  className = '',
  onChange = () => {},
  ...props
}: BeCheckBoxProps): JSX.Element => {

  const {
    labelText = '',
    type = 'checkbox',
    inputType = 'checkbox',
    group = '',
    name = '',
    indeter = false,
    checked = false
  } = props

  const setClass: string = [
    type,
    indeter && 'indeter'
  ].filter((item): item is string => Boolean(item)).join(' ')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e)
  return (
    <div className={`be-checkbox ${className} ${setClass} ${checked ? 'checked' : ''}`}>
      <label htmlFor={name}>
        {children || labelText}
      </label>
      <input 
        name={inputType === 'radio' ? group : name} 
        id={name} 
        type={inputType}
        onChange={handleChange}
        checked={checked}
      />
    </div>
  )
}

export default BeCheckBox