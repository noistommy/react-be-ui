const BeForm = ({
  children,
  title = null
}:{
  children?: React.ReactNode;
  title?: string
}):JSX.Element => { 
  return (
    <div className="be-form">
      {title && (
        <div className="header">
          <div className="title">{title}</div>
        </div>
      )}
      {children}
    </div>
  )

}

export default BeForm