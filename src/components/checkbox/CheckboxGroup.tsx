
const BeCheckboxGroup = ({
  children,
  checkboxList = []
}) => {

  return (
    <div className="be-checkbox-group">
      {children || (
        <>
          {checkboxList.map(item => (
            <div className="be-checkbox">
              
            </div>
          ))}
        </>
      )}
    </div>
  )
}