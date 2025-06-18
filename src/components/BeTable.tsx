import { useState, useMemo } from 'react'

const BeTable = ({
  children,
  onSelectColumn,
  ...props
}) => {
  const {
    columns = [],
    values = [],
    headAlign = 'center',
    useFoot = false,
    border = false,
    gridType = null,
    divideNum = 3,
    selection = false,
    striped = null
  } = props

  const gridClass = useMemo(() => {
    return gridType === 'divide' ?  `divide-${divideNum}` : gridType
  }, [gridType, divideNum])

  const setClass = [
    border && 'border',
    selection && 'selection',
    striped && `striped ${striped}`,
    gridClass
  ].filter((item): item is string => Boolean(item)).join(' ')

  const onRowSelect = (row) => {
    console.log(row)
  }

  return (
    <table className={`be-table ${setClass}`}>
      {children || (
        <>
          <thead className={`align-${headAlign}`}>
            <tr>
              {columns.map(col => (
                <th key={col.key} className={`align-${headAlign}`}>
                  {col.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {values.map((row, i) => (
              <tr key={`row-${i}`} className="" onClick={() => onRowSelect(i)}>
                {columns.map(column => (
                  <td key={`cell-${i}-${column.key}`} className={`align-${column.align || 'center'} col-${column.col}`}>
                    <div className="cell">{row[column.key]}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </>
      )}
    </table>
  )
}
export default BeTable