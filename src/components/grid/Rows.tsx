const Rows = ({children, ...rest}:{children?: React.ReactNode}):JSX.Element => { 
  return (
    <div className="rows" {...rest}>
      {children}
    </div>
  )

}

export default Rows