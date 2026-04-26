const BeForm = ({
  children,
  title = null,
  desc = null
}:{
  children?: React.ReactNode;
  title?: string;
  desc?: string;
}):JSX.Element => { 
  return (
    <div className="be-form">
      {title && (
        <div className="header">
          <div className="title">{title}</div>
          {desc && <div className="desc">{desc}</div>}
        </div>
      )}
      {children}
    </div>
  )

}

export default BeForm