
interface BeBadgeProps {
  children?: React.ReactNode;
  contents?: string;
  brand?: 'primary' | 'secondary';
  state?: 'success' | 'error' | 'attention' | 'importance' | 'info';
  color?: string;
  mark?: boolean;
  shadow?: boolean;
  align?: 'left' | 'center' | 'right';
  icon? : string;
}

const BeBadge = ({children, ...props}: BeBadgeProps): JSX.Element => {

  const {
    contents = '',
    brand = null,
    state =  null,
    color = null,
    mark = false,
    shadow = true,
    align = 'center',
    icon = null
  } = props

  const setClass = [
    brand,
    state,
    color,
    mark && 'mark',
    shadow && 'shadow',
    align && `align-${align}`,
    icon && 'icon'
  ].filter(Boolean).join(' ')

  return (
    <div className={`be-badge ${setClass}`}>
      {children || (
        <>
          {icon ? (
            <i className={`icon ${icon}`} />
          ) : (
            contents
          )}
        </>
      )}
      </div>
  )
}

export default BeBadge