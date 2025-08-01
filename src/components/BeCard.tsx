import createSlots from './slot/createSlots'

const BeCard = ({
  children,
  title,
  surf,
  border = true,
  float,
  align,
  round = 'l'
}: {
  children?: React.ReactNode;
  title?: string;
  surf?: boolean;
  border?: boolean;
  float?: boolean;
  align?: 'left' | 'center' | 'right';
  round?: 's' | 'm' | 'l' | 'xl';
}): JSX.Element => {
  const slots = createSlots(children, ['image', 'header', 'contents', 'extra', 'footer' ])
  const setClass = [
    surf && 'surface',
    border && 'border',
    float && 'float',
    align && `align-${align}`,
    `round-${round}`,
    slots.header || slots.footer && 'atteched'
  ].filter((item): item is string => Boolean(item)).join(' ')
  
  return (
    <div className={`be-card ${setClass}`}>
      {slots.header && (
        <div className="header">{slots.header}</div>
      )}
      {slots.image && (
        <div className="image">{slots.image}</div>
      )}
      {slots.contents ? (
        <div className="contents">
          {title && (<div className="title">{title}</div>)}
          {slots.contents}
        </div>
      ): children}
      
      {slots.extra && (
        <div className="extra">{slots.extra}</div>
      )}
      {slots.footer && (
        <div className="footer">{slots.footer}</div>
      )}
    </div>
  )
}

export default BeCard