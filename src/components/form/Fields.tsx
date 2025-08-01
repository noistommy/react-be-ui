interface FieldsProps {
  children: React.ReactNode;
  divide?: number;
  md?: number;
  sm?: number;
  xs?: number;
  justify?: 'left' | 'center' | 'right' | 'between' | 'around';
  align?: 'left' | 'center' | 'right' | 'stretch';
  leftSide?: boolean;
  rightSide?: boolean;
}

const Fields = ({children, ...props}: FieldsProps): JSX.Element => {

  const {
    divide = null,
    md = null,
    sm = null,
    xs = null,
    justify = null,
    align = null,
    leftSide = null,
    rightSide = null,
  } = props

  const setClass = [
    divide && `divide-${divide}`,
    divide && md && `divide-md-${md}`,
    divide && sm && `divide-sm-${sm}`,
    divide && xs && `divide-xs-${xs}`,
    justify && `justify-${justify}`,
    align && `align-${align}`,
    leftSide && 'left-side',
    rightSide && 'right-side'
  ].filter((item): item is string => Boolean(item)).join(' ')

  return (
    <div className={`fields ${setClass}`}>
      {children}
    </div>
  )
}

export default Fields