const Column = ({children}:{children?: React.ReactNode}):JSX.Element => { 
  return (
    <div className="rows">
      {children}
    </div>
  )

}

export default Column