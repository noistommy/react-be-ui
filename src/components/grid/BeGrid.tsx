import Rows from './Rows';
import Column from './Column';

interface BeGridProps {
  children: React.ReactNode;
  divide?: number;
  md?: number;
  sm?: number;
  xs?: number;
  justify?: 'left' | 'center' | 'right' | 'between' | 'around';
  align?: 'top' | 'center' | 'bottom' | 'stretch';
  leftSide?: boolean;
  rightSide?: boolean;
}

const BeGrid = ({children, ...props}: BeGridProps): JSX.Element => {

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
    <div className={`be-grid ${setClass}`}>
      {children}
    </div>
  )
}

BeGrid.Rows = Rows;
BeGrid.Column = Column;

export default BeGrid