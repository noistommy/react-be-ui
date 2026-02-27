import {BeButtonProps} from '../../types'

const BeButton = ({
  children,
  className = '',
  ref,
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
    badgeOption = 'primary',
    link,
    linkTarget = '_self'
  } = props
  // const hasIcon = !!(icon || withIcon)

  const setClass: string = [brand, state, size,
    color && (light ? `${color}-light` : color),
    selected && 'selected',
    text && 'text', border && 'border',
    disabled && 'disabled', fluid && 'fluid',
    round && 'round', compact && 'compact',
    outline && 'outline', icon && 'icon',
    badge && 'badge', 
    link && 'link'
  ].filter((item): item is string => Boolean(item)).join(' ')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick(event)
    }
  }
  return (
    <button 
      className={`be-button ${className} ${setClass}`}
      ref={ref}
      onClick={handleClick}      
    >
      {children || (
        <>
          {withIcon && (iconPos === 'left' || iconPos === 'both') && (
            typeof withIcon === 'string' ? 
              <i className={`icon left ${withIcon}`} /> : 
              <i className="icon left">{withIcon}</i>
          )}

          {icon && !withIcon && (
            typeof icon === 'string' ? <i className={`icon ${icon}`} /> : icon
          )}

          {contentText && (
            <span className="button-text">{contentText}</span>
          )}

          {withIcon && (iconPos === 'right' || iconPos === 'both') && (
            typeof withIcon === 'string' ? 
              <i className={`icon right ${withIcon}`} /> : 
              <i className="icon right">{withIcon}</i>
          )}
          
          {badge && (
            <div className={`in-badge ${badgeOption}`}>{badge}</div>
          )}
        </>
      )}
      {link && (
        <a className="link" href={link} target={linkTarget}></a>
      )}
    </button>
  )
}

export default BeButton