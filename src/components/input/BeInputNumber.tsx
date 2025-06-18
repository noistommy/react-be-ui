import { useState, useRef, useMemo, useEffect, ChangeEvent } from 'react'

interface BeInputProps {
  children?: React.ReactNode;
  value?: number;
  onChange?: (value: string) => void;
  onFocus?: (isFocused: boolean) => void;
  onButtonClick?: (value: string) => void;
  status?: string;
  placeholder?: string;
  readonly?: boolean;
  underline?: boolean;
  transparent?: boolean;
  compact?: boolean;
  fluid?: boolean;
  iconLeft?: string | null;
  iconRight?: string | null;
  step?: number;
  controller?: string;
  min?: number | null;
  max?: number | null;
  incIcon?: string;
  decIcon?: string;
  disabled?: boolean;
  width?: number
}

const BeInputNumber = ({ 
  children, 
  value = 0, 
  onChange = () => {}, 
  onFocus = () => {},
  ...props
}: BeInputProps): JSX.Element => {
  const {
    status = null,
    placeholder = '0',
    readonly = false,
    underline = false,
    transparent = false,
    compact = false,
    fluid = false,
    iconLeft = null,
    iconRight = null,
    step = 1,
    controller = 'between',
    min = null,
    max = null,
    incIcon = 'xi-plus',
    decIcon = 'xi-minus',
    disabled = false,
    width = 150
  } = props

  const [inputValue, setInputValue] = useState(value)
  const [isFocus, setIsFocus] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (min && value < min) setInputValue(min)
    if (max && value > max) setInputValue(max)
  }, [value, min, max])

  const iconPosition = useMemo(() => {
    if (iconLeft && conRight) return 'both';
    return iconLeft ? 'left' : iconRight ? 'right' : '';
  }, [iconLeft, iconRight]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInputValue(parseInt(newValue));
    onChange(parseInt(newValue));
  };

  const checkFocus = () => {
    if (!isFocus) {
      setIsFocus(true)
      onFocus(true)
    }
  };

  const handleBlur = () => {
    setIsFocus(false)
    onFocus(false)
  };

  const increase = () => {
    if(max && inputValue + step > max) return
    setInputValue(inputValue + step)
    onChange(inputValue + step);
  }
  const decrease = () => {
    if(min && inputValue - step > min) return
    setInputValue(inputValue - step)
    onChange(inputValue - step);
  }

  const keyControl =(e) => {
    if(disabled) return
    if(e.keyCode ===38) increase()
    if(e.keyCode ===40) decrease()
  }


  const setClass: string = [
    status,
    readonly && 'readonly',
    underline && 'underline',
    transparent && 'transparent', 
    compact && 'compact',
    fluid && 'fluid',
    (iconLeft || iconRight) && 'icon',
    iconPosition,
    disabled && 'disabled',
    controller
  ].filter((item): item is string => Boolean(item)).join(' ')

  return (
    <div 
      className={`be-input button number ${setClass}`}
      tabIndex="-1"
      style={{ width: `${width}px` }}
      onKeyDown={keyControl}
    >
      {children}
      {iconLeft && (
        <i className={`icon ${iconLeft}`} />
      )}

      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        ref={inputRef}
        onClick={checkFocus}
        onBlur={handleBlur}
        readOnly={readonly}
        disabled={disabled}
      />
      {iconRight && (
        <i className={`icon ${iconRight}`} />
      )}
      <button className={`be-button compact icon dec ${disabled}`} onClick={decrease}>
        <i className={`icon ${decIcon}`}></i>
      </button>
      <button className={`be-button compact icon inc ${disabled}`} onClick={increase}>
        <i className={`icon ${incIcon}`}></i>
      </button>
    </div>
  )

}

export default BeInputNumber