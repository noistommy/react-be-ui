const Field = ({
  children,
  fieldLabel = null,
  inline = false,
  short = false,
  disabled = false
}:{
  children?: React.ReactNode;
  inline?: boolean;
  disabled?: boolean;
  fieldLabel?: string;
}):JSX.Element => { 
  return (
    <div 
      className={
        `field ${inline ? 'inline' : ''} ${disabled ? 'disabled' : ''} ${short ? 'short' : ''}`
      }
    >
      {fieldLabel && (<label>{fieldLabel}</label>)}
      {children}
    </div>
  )

}

export default Field