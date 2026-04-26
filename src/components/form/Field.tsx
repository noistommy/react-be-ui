const Field = ({
  children,
  fieldLabel = null,
  inline = false,
  short = false,
  disabled = false,
  column = null,
  span = null,
  offset = null,
  order = null, 
  md = null, 
  sm = null, 
  xs = null,
  offset_md = null,
  offset_sm = null,
  offset_xs = null,
  helpText = ''
}:{
  children?: React.ReactNode;
  inline?: boolean;
  disabled?: boolean;
  fieldLabel?: string;
}):JSX.Element => { 
  const setClass: string = [
    inline && 'inline',
    disabled && 'disabled',
    short && 'short',
    column && 'column',
    span && `span-${span}`,
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
    <div 
      className={
        `field ${setClass}`
      }
    >
      {fieldLabel && (<label>{fieldLabel}</label>)}
      {children}
      {helpText && (<div className="help-text">{helpText}</div>)}
    </div>
  )

}

export default Field