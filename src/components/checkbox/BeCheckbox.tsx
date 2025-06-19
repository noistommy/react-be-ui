import { useState, useEffect, ChangeEvent } from 'react'

interface BeCheckBoxProps {
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  type?: 'checkbox' | 'radio';
  group?: string;
  name: string;
  labelText?: string;
  indeter?: boolean;
  checked?: boolean;
}

const BeCheckBox = ({
  children,
  onChange = () => {},
  ...props
}: BeCheckBoxProps): JSX.Element => {

  const {
    labelText = '',
    type = 'checkbox',
    group = '',
    name = '',
    indeter = false,
    checked = false
  } = props

  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const setClass: string = [
    type,
    indeter && 'indeter'
  ].filter((item): item is string => Boolean(item)).join(' ')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    onChange(name, newChecked);
  }

  return (
    <div className={`be-checkbox ${setClass} ${isChecked ? 'checked' : ''}`}>
      <label htmlFor={name}>
        {children || labelText}
      </label>
      <input 
        name={type === 'radio' ? group : name} 
        id={name} 
        type={type}
        onChange={handleChange}
        checked={isChecked}
      />
    </div>
  )
}

export default BeCheckBox