import { useState, useRef, useMemo, useEffect, ChangeEvent, MouseEvent } from 'react'

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
  button?: boolean | ButtonOption | null;
}

const BeInput = ({ 
  children, 
  value = '', 
  onChange = () => {}, 
  onFocus = () => {},
  onButtonClick = () => {},
  ...props
}: BeInputProps): JSX.Element => {
  const {
    type = 'input',
    inputType = 'text',
    align = 'left',
    status,
    placeholder = '입력하세요',
    readonly = false,
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
    button = null,
  } = props

  const [inputValue, setInputValue] = useState(value)
  const [isFocus, setIsFocus] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const iconPosition = useMemo(() => {
    if (iconLeft && (iconRight || clear)) return 'both';
    return iconLeft ? 'left' : iconRight || clear ? 'right' : null;
  }, [iconLeft, iconRight, clear]);

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
    transparent && 'transparent', 
    compact && 'compact',
    fluid && 'fluid',
    (iconLeft || iconRight || clear) && 'icon',
    iconPosition,
    badge && 'badge',
    unit && 'unit',
    disabled && 'disabled',
    labeled && 'labeled',
    labeled?.pos || 'right',
    button && 'button',
    button?.pos || 'right'
  ].filter((item): item is string => Boolean(item)).join(' ')

  return (
    <div 
      className={`be-input ${setClass}`}
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
          placeholder={placeholder}
          className={`align-${align}`}
          ref={inputRef}
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
          onBlur={handleBlur}
          readOnly={readonly}
          disabled={disabled}
        />
      )}
      {clear ? (
        <i
          className={`icon clear-btn xi-close ${inputValue === '' ? 'disabled' : ''}`}
          onClick={handleClear}
        />
      ) : iconRight && !clear ? (
        <i className={`icon ${iconRight}`} />
      ) : badge ? (
        <span className={`be-badge ${badgeOption || ''}`}>{badge}</span>
      ) : null}
      {labeled ? (
        children || <div className={`label ${labeled.option}`}>{children || labeled.contents}</div>
      ) : button ? (
        children || <button className={`be-button ${button.option}`} onClick={handleButtonClick}>{button.contents}</button>
      ) : null}
    </div>
  )

}

export default BeInput