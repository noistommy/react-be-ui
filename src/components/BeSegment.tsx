
const BeSegment = ({
  children,
  className = '',
  surf,
  border,
  float,
  align = 'left',
  round = 'm',
}: {
  children?: React.ReactNode;
  className?: string;
  surf?: boolean;
  border?: boolean;
  float?: boolean;
  align?: 'left' | 'center' | 'right';
  round?: 's' | 'm' | 'l' | 'xl'
}): JSX.Element => {

  const setClass = [
    surf && 'surface',
    border && 'border',
    float && 'float',
    align && `align-${align}`,
    `round-${round}`
  ].filter((item): item is string => Boolean(item)).join(' ')
  
  return (
    <div className={`be-segment ${className} ${setClass}`}>
      <div className="contents">
        {children}
      </div>
    </div>
  )
}

export default BeSegment