import {BeButtonProps} from '../../types'
import BeButton from './BeButton'

interface BeButtonProps {
  children: React.ReactNode;
  className: string;
  buttons: BeButtonProps[];
  border?: boolean;
  round?: boolean;
  value?: number;
}


const BeButtons = ({
  children,
  onChange = () => {},
  className = '',
  ...props
}: BeButtonProps): JSX.Element => {
  const {
    buttons = null,
    border = false,
    round = false,
    value = 0,
    ...rest
  } = props
  const handleSelect = (idx) => {
    onChange(idx)
  }
  return (
    <div className={`be-buttons ${className} ${border ? 'border' : ''} ${round ? 'round' : ''}`} {...rest}>
      {children || (
        <>
          {buttons.map((b, i) => (
            <BeButton 
              key={`btn-${i}`}
              {...b} 
              selected={value === i}
              onClick={() => handleSelect(i)}
            ></BeButton>
          ))}
        </>
      )}
    </div>
  )
}

export default BeButtons