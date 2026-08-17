const BeForm = ({
  children,
  ...props
}:{
  children?: React.ReactNode;
  title?: string;
  desc?: string;
}):JSX.Element => {
  const {
    title = null,
    desc = null,
    ...rest
  } = props 
  return (
    <div className="be-form" {...rest}>
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