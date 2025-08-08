interface BeTagProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'label' | 'line' | 'dot';
  color?: string;
  light?: boolean;
  round?: boolean;
  icon?: string;
  iconPos?: 'left' | 'right';
  pointDirect?: 'up' | 'down' | 'left' | 'right';
  disabled?: boolean;
}

const BeTag = ({
  children, 
  onClick = () => {}, 
  ...props
}: BeTagProps): JSX.Element => {
  const {
    type = 'label', // line, dot
    color = null,
    light = false,
    round = false,
    icon = null,
    iconPos = null, // 'right'
    pointDirect = 'up',
    disabled = false
  } = props

  const setClass = [
    type,
    color,
    light && 'light',
    round && 'round',
    icon && 'icon',
    type === 'pointing' && pointDirect,
    disabled && 'disabled'
  ].filter(Boolean).join(' ')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick(event)
    }
  }

  return (
    <span 
      className={`be-tag ${setClass}`} 
      onClick={handleClick}
    >
      {icon && iconPos !== 'right' && (
        <i className={`icon ${iconPos} ${icon}`}></i>
      )}
      {(type === 'label' || type === 'pointing') && children}
      {icon && iconPos === 'right' && (
        <i className={`icon right ${icon}`}></i>
      )}
    </span>
  )
}

export default BeTag