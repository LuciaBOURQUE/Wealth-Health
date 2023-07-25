import { useMemo } from "react"
import { useTable, useSortBy } from "react-table"
import { MOCK_EMPLOYEES } from "../../datas/mock_employees.js"
import { COLUMNS } from "./columns.js"
import "../../sass/index.scss"

export default function TableEmployee() {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_EMPLOYEES, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    )

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((header) => (
          <tr {...header.getHeaderGroupProps()}>
            {header.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? "🔼" : "🔽") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
