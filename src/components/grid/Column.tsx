interface ColumnProps {
  children: React.ReactNode, 
  span?: number, 
  spanName?: string,
  offset?: number,
  order?: number,
  md?: number, 
  sm?: number, 
  xs?: number
  offset_md?: number, 
  offset_sm?: number, 
  offset_xs?: number
}
const Column = ({
  children, 
  span, 
  spanName,
  offset,
  order, 
  md, 
  sm, 
  xs,
  offset_md,
  offset_sm,
  offset_xs,
 }:ColumnProps):JSX.Element => {
    const setClass: string = [
      span && `span-${span}`,
      spanName,
      offset && `offset-${offset}`,
      order && `order-${order}`,
      md && `span-md-${md}`,
      sm && `span-sm-${sm}`,
      xs && `span-xs-${xs}`,
      offset_md && `offset-md-${offset_md}`,
      offset_sm && `offset-sm-${offset_sm}`,
      offset_xs && `offset-xs-${offset_xs}`,
    ].filter((item): item is string => Boolean(item)).join(' ')

    return (
      <div className={`column ${setClass}`}>
        {children}
      </div>
    )

}

export default Column