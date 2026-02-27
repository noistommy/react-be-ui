import { useState, useRef, useMemo, useEffect, ChangeEvent, MouseEvent, MutableRefObject } from 'react'

interface LabeledOption {
  pos?: 'left' | 'right';
  option?: string;
  contents?: string;
}

interface ButtonOption {
  pos?: 'left' | 'right';
  option?: string;
  contents?: string;
}

interface BeInputProps {
  children?: React.ReactNode;
  value?: string;
  ref? : HTMLInputElement | HTMLTextAreaElement | null;
  className? : string;
  onChange?: (value: string) => void;
  onFocus?: (isFocused: boolean) => void;
  onButtonClick?: (value: string) => void;
  type?: 'input' | 'textarea';
  inputType?: string;
  align?: 'left' | 'center' | 'right';
  status?: string;
  placeholder?: string;
  readonly?: boolean;
  underline?: boolean;
  round?: boolean;
  transparent?: boolean;
  compact?: boolean;
  fluid?: boolean;
  iconLeft?: string | null;
  iconRight?: string | null;
  clear?: boolean;
  badge?: string | null;
  badgeOption?: string;
  disabled?: boolean;
  unit?: string | null;
  labeled?: boolean | LabeledOption | null;
  withButton?: boolean | ButtonOption | null;
  short?: boolean;
  label?: string;
}

const BeInput = ({ 
  children, 
  value = '',
  className = '',
  onChange = () => {}, 
  onFocus = () => {},
  onButtonClick = () => {},
  ref,
  ...props
}: BeInputProps): JSX.Element => {
  const {
    type = 'input',
    inputType = 'text',
    align = 'left',
    status,
    placeholder = '입력하세요',
    readonly = false,
    round = false,
    underline = false,
    transparent = false,
    compact = false,
    fluid = false,
    iconLeft = null,
    iconRight = null,
    clear = false,
    badge = null,
    badgeOption = {},
    disabled = false,
    unit = null,
    labeled = null,
    withButton = null,
    short = false,
    label = null
  } = props

  const [inputValue, setInputValue] = useState(value)
  const [isFocus, setIsFocus] = useState(false)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  const setRefs = (element: HTMLInputElement | HTMLTextAreaElement | null) => {
    inputRef.current = element
    if (!ref) return

    if (typeof ref === 'function') {
      ref(element)
    } else {
      (ref as MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>).current = element
    }
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const iconPosition = useMemo(() => {
    if (iconLeft && iconRight) return 'both';
    return iconLeft ? 'left' : iconRight ? 'right' : null;
  }, [iconLeft, iconRight]);

  const setPlaceholder = useMemo(() => {
    return label ? '' : placeholder
  }, [placeholder, label])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
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

  const handleClear = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setInputValue('')
    onChange('')
  };

  const handleButtonClick = () => {
    onButtonClick(inputValue)
  }

  const setClass: string = [
    status,
    readonly && 'readonly',
    underline && 'underline',
    round && 'round',
    transparent && 'transparent', 
    compact && 'compact',
    fluid && 'fluid',
    (iconLeft || iconRight || clear) && 'icon',
    iconPosition,
    badge && 'badge',
    unit && 'unit',
    disabled && 'disabled',
    labeled && 'labeled',
    labeled && (labeled.pos || 'right'),
    withButton && 'withButton',
    withButton &&( withButton.pos || 'right'),
    type === 'textarea' && short ? 'short' : ''
  ].filter((item): item is string => Boolean(item)).join(' ')

  return (
    <div 
      className={`be-input ${className} ${setClass}`}
      data-unit={unit}
    >
      {iconLeft && (
        <i className={`icon ${iconLeft}`} />
      )}
      {type === 'input' ? (
        <input
          type={inputType}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={setPlaceholder}
          className={`align-${align}`}
          ref={setRefs}
          onClick={checkFocus}
          onBlur={handleBlur}
          readOnly={readonly}
          disabled={disabled}
        />
      ) : (
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          rows={3}
          placeholder={placeholder}
          ref={setRefs}
          onBlur={handleBlur}
          readOnly={readonly}
          disabled={disabled}
        />
      )}
      {label && (
        <label>{label}</label>
      )}
      {clear && (
        <i
          className={`icon clear-btn xi-close ${inputValue === '' ? 'disabled' : ''}`}
          onClick={handleClear}
        />
      )}
      {iconRight ? (
        <i className={`icon ${iconRight}`} />
      ) : badge ? (
        <span className={`be-badge ${badgeOption || ''}`}>{badge}</span>
      ) : null}
      {labeled ? (
        children || <div className={`label ${labeled.option}`}>{children || labeled.contents}</div>
      ) : withButton ? (
        children || <button className={`be-button ${withButton.option}`} onClick={handleButtonClick}>{withButton.contents}</button>
      ) : null}
    </div>
  )

}

export default BeInput