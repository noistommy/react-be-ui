import { useState, ChangeEvent } from 'react'

interface BeCheckBoxProps {
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  type?: 'checkbox' | 'radio';
  name: string;
  labelText?: string;
  indeter?: boolean;
  checked?: boolean;
}

const BeCheckBox = ({
  children,
  onChange,
  ...props
}: BeCheckBoxProps): JSX.Element => {

  const {
    labelText = '',
    type = 'checkbox',
    name = 'checkbox',
    indeter = false,
    checked = false
  } = props

  const [isChecked, setIsChecked] = useState(checked)

  const setClass: string = [
    type,
    indeter && 'indeter'
  ].filter((item): item is string => Boolean(item)).join(' ')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  }

  return (
    <div className={`be-checkbox ${setClass} ${isChecked ? 'checked' : ''}`}>
      <label htmlFor={name}>
        {children || labelText}
      </label>
      <input 
        name={name} 
        id={name} 
        type="checkbox" 
        onChange={handleChange}
        checked={isChecked}
      />
    </div>
  )
}

export default BeCheckBox