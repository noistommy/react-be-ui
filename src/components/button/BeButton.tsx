import {BeButtonProps} from '../../types'

const BeButton = ({
  children,
  onClick = () => {},
  ...props
}: BeButtonProps): JSX.Element => {
  const { 
    selected,
    contentText,
    brand, 
    state, 
    color, 
    light = false,
    text, 
    border, 
    disabled, 
    fluid, 
    round,
    size, 
    compact, 
    outline, 
    icon,
    withIcon,
    iconPos = 'left',
    badge, 
    badgeOption = 'primary'
  } = props
  
  // const hasIcon = !!(icon || withIcon)

  const setClass: string = [brand, state, size,
    color && (light ? `${color}-light` : color),
    selected && 'selected',
    text && 'text', border && 'border',
    disabled && 'disabled', fluid && 'fluid',
    round && 'round', compact && 'compact',
    outline && 'outline', icon && 'icon',
    badge && 'badge' 
  ].filter((item): item is string => Boolean(item)).join(' ')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick(event)
    }
  }
  return (
    <button 
      className={`be-button ${setClass}`}
      onClick={handleClick}      
    >
      {children || (
        <>
          {withIcon && (iconPos === 'left' || iconPos === 'both') && (
            <i className={`icon left ${withIcon}`} />
          )}

          {icon && !withIcon && (
            <i className={`icon ${icon}`}></i>
          )}

          {contentText && (
            <span className="button-text">{contentText}</span>
          )}

          {withIcon && (iconPos === 'right' || iconPos === 'both') && (
            <i className={`icon right ${withIcon}`}></i>
          )}
          
          {badge && (
            <div className={`in-badge ${badgeOption}`}>{badge}</div>
          )}
        </>
      )}
    </button>
  )
}

export default BeButton