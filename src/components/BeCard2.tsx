

const BeCard2 = ({
  children,
  className = '',
  surf,
  border = true,
  float,
  align,
  round = 'm',
  media
}: {
  children?: React.ReactNode;
  className?: string;
  surf?: boolean;
  border?: boolean;
  float?: boolean;
  align?: 'left' | 'center' | 'right';
  round?: 's' | 'm' | 'l' | 'xl';
}): JSX.Element => {
  const setClass = [
    surf && 'surface',
    border && 'border',
    media && 'media',
    float && 'float',
    align && `align-${align}`,
    `round-${round}`,
  ].filter((item): item is string => Boolean(item)).join(' ')
  
  return (
    <div className={`be-card ${className} ${setClass}`}>
      {children}
    </div>
  )
}

const Header = ({children}) => {
  return (
    <div className="header">{children}</div>
  )
}
const Footer = ({children}) => {
  return (
    <div className="footer">{children}</div>
  )
}
const Extra = ({children}) => {
  return (
    <div className="extra">{children}</div>
  )
}
const Image = ({...props}) => {
  return (
    <div className="image">
      <img {...props} />
    </div>
  )
}

const Contents = ({children, ...props}) => {
  return (
    <div className="contents">
      {props.title && (<div className="title">{props.title}</div>)}
      {children}
    </div>
  )
}

BeCard2.Header = Header
BeCard2.Footer = Footer
BeCard2.Extra = Extra
BeCard2.Image = Image
BeCard2.Contents = Contents

export default BeCard2