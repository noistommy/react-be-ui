import React from 'react'
const BeSegment = ({
  children,
  className = '',
  surf,
  border,
  float,
  align = 'left',
  round = 'm',
  attached = false
}: {
  children?: React.ReactNode;
  className?: string;
  surf?: boolean;
  border?: boolean;
  float?: boolean;
  align?: 'left' | 'center' | 'right';
  round?: 's' | 'm' | 'l' | 'xl';
  attached?: boolean
}): JSX.Element => {
  
  const setClass = [
    surf && 'surface',
    border && 'border',
    float && 'float',
    align && `align-${align}`,
    `round-${round}`,
    attached && 'attached'
  ].filter((item): item is string => Boolean(item)).join(' ')
  
  let hasCompond = false;
  React.Children.forEach((children), (child) => {
    if (React.isValidElement(child) && 
    (child.type === Header || child.type === Contents || child.type === Footer)) {
      hasCompond = true;
    }
  })

  return (
    <div className={`be-segment ${className} ${setClass}`}>
      {hasCompond ? children : (<div className="contents">{children}</div>)}
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
const Contents = ({children, ...props}) => {
  return (
    <div className="contents">
      {props.title && (<div className="title">{props.title}</div>)}
      {children}
    </div>
  )
}

BeSegment.Header = Header
BeSegment.Footer = Footer
BeSegment.Contents = Contents


export default BeSegment